const menuItems = document.querySelectorAll(".menu-item");

const navigateSfx = document.getElementById("navigate-sfx");
const selectSfx = document.getElementById("select-sfx");
const enterSfx = document.getElementById("enter-sfx");
const bgSfx = getBgAudio();
bgSfx.volume = 0.1;  

const startScreen = document.getElementById("start-screen");
const startPrompt = document.querySelector(".start-prompt");

let selectedIndex = 0;
let started = false;

/* =========================
   AUDIO
   ========================= */

function playSound(audio) {
  if (!audio) return;

  audio.currentTime = 0;

  audio.play().catch((err) => {
    /*
            Browser may block audio until
            the user interacts with the page.
        */
    console.warn("Playback blocked:", err.name, err.message);
  });
}

function playNavigateSound() {
  playSound(navigateSfx);
}

function playSelectSound() {
  playSound(selectSfx);
}

function playEnterSound() {
  playSound(enterSfx);
}

/* =========================
   SESSION
   ========================= */

function checkPortfolioSession() {
  const alreadyStarted = sessionStorage.getItem("portfolioStarted");

  if (alreadyStarted === "true") {
    started = true;
    startScreen.classList.add("hidden");

    if (bgSfx) {
      bgSfx.loop = true;
      bgSfx.play().catch(() => {
        const resumeOnInteract = () => {
          bgSfx.play();
          document.removeEventListener("click", resumeOnInteract);
          document.removeEventListener("keydown", resumeOnInteract);
        };
        document.addEventListener("click", resumeOnInteract, { once: true });
        document.addEventListener("keydown", resumeOnInteract, { once: true });
      });
    }
  }
}

checkPortfolioSession();

window.addEventListener("pageshow", () => {
  checkPortfolioSession();
});
/* =========================
   START SCREEN
   ========================= */

function startExperience() {
  if (started) return;

  started = true;

  playSelectSound();
  sessionStorage.setItem("portfolioStarted", "true");

  startScreen.classList.add("hidden");
  bgSfx.loop = true;
  playSound(bgSfx);
}

/* =========================
   KEYBOARD NAVIGATION
   ========================= */

document.addEventListener("keydown", (event) => {
  if (!started) {
    startExperience();

    return;
  }

  /* =========================
       DOWN
       ========================= */

  if (event.key === "ArrowDown") {
    event.preventDefault();

    selectedIndex = (selectedIndex + 1) % menuItems.length;

    updateSelection();
  }

  /* =========================
       UP
       ========================= */

  if (event.key === "ArrowUp") {
    event.preventDefault();

    selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;

    updateSelection();
  }

  /* =========================
       ENTER
       ========================= */

  if (event.key === "Enter") {
    event.preventDefault();

    playEnterSound();

    const selectedItem = menuItems[selectedIndex];

    const mode = selectedItem.dataset.mode;

    enterMode(mode);
  }
});

/* =========================
   MOUSE / TOUCH
   ========================= */

startScreen.addEventListener("click", startExperience);

startPrompt.addEventListener("click", startExperience);

menuItems.forEach((item, index) => {
  /* Hover */

  item.addEventListener("mouseenter", () => {
    if (selectedIndex !== index) {
      selectedIndex = index;

      updateSelection();
    }
  });

  /* Click */

  item.addEventListener("click", () => {
    playEnterSound();

    enterMode(item.dataset.mode);
  });
});

/* =========================
   MENU SELECTION
   ========================= */

function updateSelection(playAudio = true) {
  menuItems.forEach((item, index) => {
    item.classList.toggle("selected", index === selectedIndex);
  });

  if (playAudio) {
    playNavigateSound();
  }
}

/* =========================
   MODE SELECTION
   ========================= */

function enterMode(mode) {
  const menu = document.querySelector(".menu");

  if (!menu) return;

  menu.classList.add("exiting");

  setTimeout(() => {
    sessionStorage.setItem("bgAudioTime", bgSfx.currentTime);

    if (mode === "development") {
      window.location.href = "development.html";
    }

    if (mode === "creative") {
      window.location.href = "creative.html";
    }
  }, 1200);
}
