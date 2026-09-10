/* =========================================================
   DEVELOPMENT PAGE
   ========================================================= */

/* =========================================================
   MAIN NAVIGATION
   ========================================================= */

const navigationItems = document.querySelectorAll(".dev-nav-item");

/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const itemList = document.getElementById("item-list");

const sectionLabel = document.getElementById("section-label");

const itemNumber = document.getElementById("item-number");

const itemTitle = document.getElementById("item-title");

const itemDescription = document.getElementById("item-description");

const itemStack = document.getElementById("item-stack");

const itemLongDescription = document.getElementById("item-long-description");

const itemOpen = document.getElementById("item-open");

/* =========================================================
   AUDIO
   ========================================================= */

const navigateSfx = document.getElementById("navigate-sfx");
const selectSfx = document.getElementById("select-sfx");
const enterSfx = document.getElementById("enter-sfx");

function playSound(audio) {
  if (!audio) return;

  audio.currentTime = 0;

  audio.play().catch((err) => {
    console.warn("Audio blocked:", err);
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

/* =========================================================
   AUDIO UNLOCK
   ========================================================= */

let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;

  audioUnlocked = true;

  [navigateSfx, selectSfx, enterSfx].forEach((audio) => {
    if (!audio) return;

    const originalVolume = audio.volume;

    audio.volume = 0;

    audio
      .play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = originalVolume;
      })
      .catch(() => {});
  });
}

document.addEventListener("keydown", unlockAudio, { once: true });
document.addEventListener("click", unlockAudio, { once: true });
/* =========================================================
   DATA
   ========================================================= */

const sections = {
  /* =====================================================
       PROJECTS
       ===================================================== */

  projects: {
    label: "PROJECT DATABASE",

    items: [
      {
        number: "01",

        title: "CAREERPILOT",

        description: "PERSONAL CAREER OPERATING SYSTEM",

        stack: "PYTHON · DJANGO · REACT · PLAYWRIGHT · SQLITE",

        details:
          "Automates repetitive parts of the job search process while keeping important decisions in human hands. \n \n Still in development.",

        url: "#",
      },

      {
        number: "02",

        title: "TRANSCRIBER",

        description: "VIDEO/AUDIO TRANSCRIPTION",

        stack: "PYTHON · FLASK ·  FFMPEG · OPENAI WHISPER · HTML",

        details:
          "A video and audio transcription tool powered by OpenAI's Whisper model, built with web technologies.\nOriginally created to generate subtitle files for a film project, it evolved into a broader tool for transcribing meetings and more.",

        url: "https://github.com/kiMIGHTa/draft",
      },

      {
        number: "03",

        title: "AUTOMATION",

        description: "AUTOMATED MAILING LIST MANAGEMENT",

        stack: "PYTHON · PANDAS · OPENPYXL · SMTP · SQLITE",

        details:
          "A Python automation tool for handling repetitive business admin work — scheduled data exports, formatted Excel reporting, and email/SMS marketing campaigns from a database.",

        url: "https://github.com/kiMIGHTa/automation",
      },
      {
        number: "04",

        title: "FROZEN LAKE",

        description: "REINFORCEMENT LEARNING AGENT",

        stack: "PYTHON · GYMNASIUM · NUMPY ",

        details:
          "A minimal implementation of a Q-learning agent for OpenAI Gymnasium's FrozenLake-v1 (4x4 map). The agent learns a policy for the 4x4 FrozenLake environment (slippery by default off in code) using a tabular Q-table. This was to help me better understand how AIs learn and how to implement them from scratch. Concepts like epsilon-greedy exploration, learning rate, and discount factor are used to balance exploration and exploitation while learning the optimal policy.",

        url: "https://github.com/kiMIGHTa/reinforcment_learning",
      },

      {
        number: "05",

        title: "DOROS",

        description: "WEDDING MANAGEMENT PLATFORM",

        stack: "NEXT.JS · REACT · DJANGO · POSTGRESQL",

        details:
          "A full-stack wedding platform with administrative tooling for managing wedding services and operations.",

        url: "https://doros.wedding/",
      },

      {
        number: "06",

        title: "BPONE",

        description: "DIGITAL MAGAZINE PLATFORM",

        stack: "REACT · NEXT.JS · TYPESCRIPT · GENKIT · GEMINI-2.5-FLASH ",

        details:
          "A digital magazine platform for business outsourcing content, combining a modern frontend with AI-powered article summarization and read-time estimation.                ",

        url: "https://github.com/kiMIGHTa/BP2",
      },

    ],
  },

  /* =====================================================
       EXPERIENCE
       ===================================================== */

  experience: {
    label: "EXPERIENCE",

    items: [
      {
        number: "01",

        title: "DOROS",

        description: "BACK END DEVELOPER",

        stack: "FEB 2024 — DEC 2024",

        details:
          "Backend development using Python, Django, and related web technologies.\nMy first professional software development role — gained hands-on experience with backend architecture, remote collaboration, and working independently with minimal supervision.",
        url: "assets/Master_CV.pdf",
      },

      {
        number: "02",

        title: "NIMBLE GROUP",

        description: "DEVELOPMENT INTERN",

        stack: "MAY 2025 — OCT 2025",

        details:
          "Software development internship focused on building and maintaining web applications.",

        url: "assets/Master_CV.pdf",
      },
    ],
  },

  /* =====================================================
       EDUCATION
       ===================================================== */

  education: {
    label: "EDUCATION",

    items: [
      {
        number: "01",
        title: "KENYATTA UNIVERSITY",
        description: "BSC COMPUTER SCIENCE",
        stack: "AUG 2021 — DEC 2026",
        details:
          "Bachelor's degree in Computer Science. Coursework complete, degree conferral pending.",
        url: "assets/Master_CV.pdf",
      },
    ],
  },

  /* =====================================================
       CERTIFICATIONS
       ===================================================== */
  certification: {
    label: "CERTIFICATIONS",

    items: [
      {
        number: "01",
        title: "CCNA",
        description: "CISCO CERTIFIED NETWORK ASSOCIATE",
        stack: "IAT KENYA · 2026",
        details:
          "Networking fundamentals, routing and switching, and network security certification.",
        url: "assets/Master_CV.pdf",
      },
      {
        number: "02",
        title: "SOFTWARE ENGINEERING",
        description: "SOFTWARE ENGINEERING CERTIFICATE",
        stack: "MORINGA SCHOOL · JUN 2023 — NOV 2023",
        details:
          "Intensive software engineering program covering full-stack development fundamentals.",
        url: "assets/Master_CV.pdf",
      },
      {
        number: "03",
        title: "PYTHON ESSENTIALS 1 & 2",
        description: "CISCO NETWORKING ACADEMY",
        stack: "CISCO · 2024",
        details:
          "Python programming fundamentals through intermediate concepts.",
        url: "assets/Master_CV.pdf",
      },
    ],
  },

  /* =====================================================
       STACK
       ===================================================== */

  stack: {
    label: "TECHNOLOGY STACK",

    items: [
      {
        number: "01",

        title: "BACKEND",

        description: "SERVER-SIDE DEVELOPMENT",

        stack: "PYTHON · DJANGO · DRF · NODE.JS",

        details:
          "Backend-focused development with REST APIs, authentication, databases and server-side application architecture.",

        url: "assets/Master_CV.pdf",
      },

      {
        number: "02",

        title: "FRONTEND",

        description: "WEB APPLICATION DEVELOPMENT",

        stack: "REACT · NEXT.JS · VITE · TAILWIND",

        details:
          "Modern frontend development focused on responsive interfaces and interactive web applications.",

        url: "assets/Master_CV.pdf",
      },

      {
        number: "03",

        title: "DATABASES",

        description: "DATA & STORAGE",

        stack: "POSTGRESQL · SQLITE · MONGODB",

        details:
          "Experience working with relational and document-oriented databases across multiple applications.",

        url: "assets/Master_CV.pdf",
      },

      {
        number: "04",

        title: "INFRASTRUCTURE",

        description: "DEPLOYMENT & SERVICES",

        stack: "DOCKER · REDIS · CELERY · CLOUDFLARE",

        details:
          "Application deployment, background processing, caching and cloud infrastructure.",

        url: "assets/Master_CV.pdf",
      },
    ],
  },

  /* =====================================================
       GITHUB
       ===================================================== */

  github: {
    label: "SOURCE REPOSITORIES",

    items: [
      {
        number: "01",

        title: "GITHUB",

        description: "CODE & OPEN SOURCE",

        stack: "github.com/kiMIGHTa",

        details: "Source code, experiments, projects and development work.",

        url: "https://github.com/kiMIGHTa",
      },
    ],
  },
  about: {
    label: "ABOUT",
    text: `I'm a software developer focused on building practical, reliable software. My work is primarily in backend and full-stack development, where I enjoy turning ideas into functioning products — from designing APIs to building the interfaces that people would actually use.
    I work mainly with Django, Django REST Framework, React, and relational databases, and I'm always interested in understanding what happens underneath the application itself. That curiosity has led me deeper into networking, automation, and cybersecurity.
    I like solving problems, learning by building, and keeping things simple enough to understand without sacrificing the engineering behind them.
`,
    quote: `“The programmers of tomorrow are the wizards of the future. You're going to look like you have magic powers compared to everybody else.” — Gabe Newell`,
  },
};

/* =========================================================
   STATE
   ========================================================= */

let sectionIndex = 0;

let itemIndex = 0;

/* =========================================================
   GET CURRENT SECTION
   ========================================================= */

function getCurrentSection() {
  const sectionKey = navigationItems[sectionIndex].dataset.section;

  return sections[sectionKey];
}

/* =========================================================
   UPDATE SECTION
   ========================================================= */

function updateSection() {
  const section = getCurrentSection();

  itemIndex = 0;

  navigationItems.forEach((item, index) => {
    item.classList.toggle("selected", index === sectionIndex);
  });

  sectionLabel.textContent = section.label;

  const contentBrowser = document.querySelector(".content-browser");
  const aboutBlock = document.getElementById("about-block");

  if (section.items) {
    // normal browsable section
    contentBrowser.style.display = "";
    aboutBlock.style.display = "none";

    renderItems(section.items);
    updateItem();
  } else {
    // flat-text section (about)
    contentBrowser.style.display = "none";
    aboutBlock.style.display = "";

    document.getElementById("dev-about-text").textContent = section.text;
    const quoteEl = document.getElementById("dev-about-quote"); // NEW
    if (quoteEl) {
      quoteEl.textContent = section.quote || "";
      quoteEl.style.display = section.quote ? "" : "none";
    }
  }
}

/* =========================================================
   RENDER ITEMS
   ========================================================= */

function renderItems(items) {
  itemList.innerHTML = "";

  items.forEach((item, index) => {
    const button = document.createElement("button");

    button.className = "project-item";

    if (index === itemIndex) {
      button.classList.add("selected");
    }

    button.dataset.index = index;

    button.innerHTML = `
                <span class="project-index">
                    ${item.number}
                </span>

                <span>
                    ${item.title}
                </span>
            `;

    /* Mouse */

    button.addEventListener("mouseenter", () => {
      itemIndex = index;

      playNavigateSound();

      updateItem();
    });

    button.addEventListener("click", () => {
      itemIndex = index;

      updateItem();
    });

    itemList.appendChild(button);
  });
}

/* =========================================================
   UPDATE ITEM
   ========================================================= */

function updateItem() {
  const section = getCurrentSection();

  const item = section.items[itemIndex];

  if (!item) return;

  /* Highlight */

  const itemButtons = document.querySelectorAll(".project-item");

  itemButtons.forEach((button, index) => {
    button.classList.toggle("selected", index === itemIndex);
  });

  /* Details */

  itemNumber.textContent = item.number;

  itemTitle.textContent = item.title;

  itemDescription.textContent = item.description;

  itemStack.textContent = item.stack;

  itemLongDescription.textContent = item.details;

  itemOpen.dataset.url = item.url;

  /* Small refresh animation */

  const details = document.querySelector(".item-details");

  details.classList.remove("item-refresh");

  void details.offsetWidth;

  details.classList.add("item-refresh");
}

/* =========================================================
   CHANGE SECTION
   ========================================================= */

function moveSection(direction) {
  sectionIndex += direction;

  if (sectionIndex < 0) {
    sectionIndex = navigationItems.length - 1;
  }

  if (sectionIndex >= navigationItems.length) {
    sectionIndex = 0;
  }

  playNavigateSound();

  updateSection();
}

/* =========================================================
   CHANGE ITEM
   ========================================================= */

function moveItem(direction) {
  const section = getCurrentSection();

  if (!section.items) return;

  const itemCount = section.items.length;

  itemIndex += direction;

  if (itemIndex < 0) {
    itemIndex = itemCount - 1;
  }

  if (itemIndex >= itemCount) {
    itemIndex = 0;
  }

  playNavigateSound();

  updateItem();
}

/* =========================================================
   OPEN ITEM
   ========================================================= */

function openItem() {
  const section = getCurrentSection();

  const item = section.items[itemIndex];

  if (!item) return;

  if (!item.url || item.url === "#") {
    console.log(`Selected: ${item.title}`);

    return;
  }

  window.open(item.url, "_blank");
}

/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener("keydown", (event) => {
  /* ================================================
           ↑ / ↓ = SECTION
           ================================================ */

  if (event.key === "ArrowUp") {
    event.preventDefault();

    moveSection(-1);

    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();

    moveSection(1);

    return;
  }

  /* ================================================
           ← / → = ITEM
           ================================================ */

  if (event.key === "ArrowLeft") {
    event.preventDefault();

    moveItem(-1);

    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();

    moveItem(1);

    return;
  }

  /* ================================================
           ENTER = OPEN
           ================================================ */

  if (event.key === "Enter") {
    event.preventDefault();

    playEnterSound();
    openItem();

    return;
  }

  /* ================================================
           ESC = BACK
           ================================================ */

  if (event.key === "Escape") {
    event.preventDefault();

    playSelectSound();

    setTimeout(() => {
      window.location.href = "home.html";
    }, 150);
  }
});

/* =========================================================
   MAIN NAVIGATION MOUSE
   ========================================================= */

navigationItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    sectionIndex = index;

    playNavigateSound();

    updateSection();
  });

  item.addEventListener("click", () => {
    sectionIndex = index;

    updateSection();
  });
});

/* =========================================================
   OPEN BUTTON
   ========================================================= */

itemOpen.addEventListener("click", openItem);

/* =========================================================
   INITIALIZE
   ========================================================= */

updateSection();
