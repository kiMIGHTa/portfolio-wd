const navigationItems = document.querySelectorAll(".dev-nav-item");

const creativeBody = document.getElementById("creative-body");

const creativeLabel = document.getElementById("creative-label");

const navigateSfx = document.getElementById("navigate-sfx");
const selectSfx = document.getElementById("select-sfx");
const enterSfx = document.getElementById("enter-sfx");

function playSound(audio) {
  if (!audio) return;

  audio.currentTime = 0;

  audio.play().catch((err) => {
    if (err.name !== "NotAllowedError") {
      console.warn("Audio blocked:", err.name, err.message);
    }
  });
}

function playNavigateSound() {
  playSound(navigateSfx);
}

function playSelectSound() {
  playSound(selectSfx);
}

const sections = {
  film: {
    label: "FILM DATABASE",
    synopsis: `Set in Nairobi’s social media influencer scene, Helter Skelter follows Jenna, a
rising lifestyle creator whose online persona thrives on viral drama and
curated perfection. Her relationship with her image-obsessed boyfriend, Gidi,
suddenly implodes when a mysterious Instagram user named
Mikaylathagreat claims she has been secretly involved with him. As
accusations and supposed evidence surface online, Jenna publicly exposes
Gidi, turning their private conflict into viral content. Unknown to both of them,
the scandal is being orchestrated by Agor, a lonely call-centre worker who
obsessively follows Jenna’s online life. After discovering Gidi through her
posts, Agor hacks into his accounts and creates the fictional persona of
“Mikayla,” using AI-generated images and fabricated messages to frame Gidi
and sabotage the relationship. As the digital manipulation escalates, Agor’s
obsession pushes him beyond the screen and into the real world, culminating
in a confrontation with Gidi. Yet even as the truth unfolds, Jenna’s viral
storytelling transforms the entire ordeal into entertainment for her audience,
highlighting the blurred lines between reality, performance, and identity in the
age of social media.`,
  },

  music: {
    label: "MUSIC ARCHIVE",

    items: [
      {
        title: "BEIFONG_FREESTYLE",
        cover: "assets/images/toph.jpeg",
        url: "https://on.soundcloud.com/6XGFbGt6R0bKIhWPoL",
      },

      {
        title: "BEBE",
        cover: "assets/images/BEBE.jpeg",
        url: "https://on.soundcloud.com/sqIYewubD0mcLcTt9n",
      },

      {
        title: "KIMaI.tA",
        cover: "assets/images/kimaita.jpeg",
        url: "https://on.soundcloud.com/A70p9SvvWTDyvqbU2f",
      },

      {
        title: "DEEZ_GUISE",
        cover: "assets/images/misinformed.jpeg",
        url: "https://on.soundcloud.com/lsw6FEbopbGxl629VM",
      },

      {
        title: "FVCK_DAT",
        cover: "assets/images/fvck_dat.webp",
        url: "https://on.soundcloud.com/42epNyKVSrBnMSFXiP",
      },

      {
        title: "INSIDE",
        cover: "assets/images/inside.jpeg",
        url: "https://on.soundcloud.com/apS0Yn8PsbgPLblEiG",
      },
    ],
  },

  about: {
    label: "ABOUT",

    text: `IM!KA is a storyteller, drawn to the intersection of emotion, technology, and culture. Through film, writing, music and other creative work, he explore how people interact with the systems around them — especially in an increasingly digital world.
His projects often aims to blend grounded realism with satire, using familiar experiences to examine larger themes such as identity, privacy, visibility, and connection. As a producer and filmmaker, I'm interested in stories that feel authentic, challenge assumptions, and stay with audiences long after the credits roll.
Whether behind a camera or behind a keyboard, my goal remains the same: create work that sparks curiosity, conversation, and reflection.`,
    quote: `“I think it's just going to get weirder and weirder and weirder and finally it's going to be so weird that people are going to have to talk about how weird it is.” —Terence McKenna`
},

  awards: {
    label: "AWARDS & NOMINATIONS",

    items: [
      {
        number: "01",
        title: "HELTER SKELTER",
        description: "NOMINEE",
        stack: "SILICON VALLEY AFRICAN FILM FESTIVAL · 2026",
        details:
          "Official nomination at the Silicon Valley African Film Festival.",
        laurel: "assets/images/laurel-svaff.jpeg",
        url: "#",
      },
    ],
  },
};

let sectionIndex = 0;
let itemIndex = 0; // shared index for whichever section currently has browsable items

function currentSection() {
  return navigationItems[sectionIndex].dataset.section;
}

/* =========================================================
   MUSIC
   ========================================================= */

function renderMusic() {
  const items = sections.music.items;

  creativeBody.innerHTML = `
    <div class="creative-browser">
    <div class="music-grid">

      ${items
        .map(
          (track, index) => `
        <a href="${track.url}" target="_blank" class="music-card${index === itemIndex ? " selected" : ""}" data-index="${index}">
          <img class="cover" src="${track.cover}" alt="">
          <div class="track-title">${track.title}</div>
        </a>
      `,
        )
        .join("")}

    </div>
    </div>
  `;

  document.querySelectorAll(".music-card").forEach((card) => {
    card.addEventListener("click", () => {
      playSound(enterSfx);
    });

    card.addEventListener("mouseenter", () => {
      const index = Number(card.dataset.index);

      if (index !== itemIndex) {
        itemIndex = index;
        updateMusicSelection();
        playNavigateSound();
      }
    });
  });
}

function updateMusicSelection() {
  document.querySelectorAll(".music-card").forEach((card) => {
    card.classList.toggle("selected", Number(card.dataset.index) === itemIndex);
  });
}

/* =========================================================
   FILM
   ========================================================= */

function renderFilm() {

  const synopsis = sections.film.synopsis || "Synopsis coming soon.";
  const limit = 70; // characters shown before truncating — tune to taste
  const isLong = synopsis.length > limit;
  const truncated = isLong ? synopsis.slice(0, limit).trim() : synopsis;

  creativeBody.innerHTML = `

    <div class="film-layout">

      <div class="film-poster">
        <img src="assets/images/poster.jpeg" alt="Helter Skelter">
      </div>

      <div class="film-info">

        <div class="coming-soon">
          STREAMING OCT 08 2026
        </div>

        <h1>
          HELTER SKELTER
        </h1>

        <p class="synopsis" id="film-synopsis">
          <span class="synopsis-text" id="synopsis-short">${truncated}${isLong ? "…" : ""}</span>
          <span class="synopsis-text synopsis-hidden" id="synopsis-full">${synopsis}</span>
          ${isLong ? `<button class="read-more-btn" id="read-more-btn">Read more</button>` : ""}
        </p>

        <div class="film-buttons">

          <a href="https://youtu.be/56GIgr_4mpo" target="_blank" class="film-button">
            WATCH TRAILER
          </a>
        </div>

      </div>

    </div>
  `;

  document.querySelectorAll(".film-button:not(.disabled)").forEach((btn) => {
    btn.addEventListener("click", () => {
      playSound(enterSfx);
    });
  });

  const readMoreBtn = document.getElementById("read-more-btn");

  if (readMoreBtn) {
    let expanded = false;

    readMoreBtn.addEventListener("click", () => {
      expanded = !expanded;

      document.getElementById("synopsis-short").classList.toggle("synopsis-hidden", expanded);
      document.getElementById("synopsis-full").classList.toggle("synopsis-hidden", !expanded);

      readMoreBtn.textContent = expanded ? "Read less" : "Read more";

      playSound(navigateSfx);
    });
  }
}

/* =========================================================
   ABOUT
   ========================================================= */

function renderAbout() {
  creativeBody.innerHTML = `
    <div class="creative-browser">
      <p class="about-text">${sections.about.text}</p>
      ${sections.about.quote ? `<blockquote class="about-quote">${sections.about.quote}</blockquote>` : ""}
    </div>
  `;
}

/* =========================================================
   AWARDS — ported item-list / item-details pattern
   ========================================================= */

function renderAwards() {
  const items = sections.awards.items;

  creativeBody.innerHTML = `
    <div class="content-browser">

      <div class="item-list" id="award-item-list">
        ${items
          .map(
            (item, index) => `
          <button class="project-item${index === itemIndex ? " selected" : ""}" data-index="${index}">
            <span class="project-index">${item.number}</span>
            <span>${item.title}</span>
          </button>
        `,
          )
          .join("")}
      </div>

      <article class="item-details" id="award-item-details">
        <div class="item-number" id="award-item-number"></div>
        <h1 id="award-item-title"></h1>
        <p class="item-description" id="award-item-description"></p>
        <div class="item-stack" id="award-item-stack"></div>
        <div class="item-long-description" id="award-item-long-description"></div>
        <img class="award-laurel" id="award-laurel" src="" alt="">
      </article>

    </div>
  `;

  document.querySelectorAll("#award-item-list .project-item").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      const index = Number(btn.dataset.index);

      if (index !== itemIndex) {
        itemIndex = index;
        playNavigateSound();
        updateAwardItem();
      }
    });

    btn.addEventListener("click", () => {
      itemIndex = Number(btn.dataset.index);
      updateAwardItem();
    });
  });

  const openBtn = document.getElementById("award-item-open");
  if (openBtn) {
    openBtn.addEventListener("click", openSelectedItem);
  }

  updateAwardItem();
}

function updateAwardItem() {
  const items = sections.awards.items;
  const item = items[itemIndex];

  if (!item) return;

  document
    .querySelectorAll("#award-item-list .project-item")
    .forEach((btn, index) => {
      btn.classList.toggle("selected", index === itemIndex);
    });

  const numberEl = document.getElementById("award-item-number");
  const titleEl = document.getElementById("award-item-title");
  const descEl = document.getElementById("award-item-description");
  const stackEl = document.getElementById("award-item-stack");
  const longDescEl = document.getElementById("award-item-long-description");
  const detailsEl = document.getElementById("award-item-details");
  const laurelEl = document.getElementById("award-laurel");

  if (numberEl) numberEl.textContent = item.number;
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.description;
  if (stackEl) stackEl.textContent = item.stack;
  if (longDescEl) longDescEl.textContent = item.details;

  if (detailsEl) {
    detailsEl.classList.remove("item-refresh");
    void detailsEl.offsetWidth;
    detailsEl.classList.add("item-refresh");
  }
  if (laurelEl) {
    if (item.laurel) {
      laurelEl.src = item.laurel;
      laurelEl.style.display = "block";
    } else {
      laurelEl.style.display = "none"; // hide it for awards without a laurel image
    }
  }
}

/* =========================================================
   SHARED ITEM NAVIGATION (music + awards)
   ========================================================= */

function getSectionItems(section) {
  if (section === "music") return sections.music.items;
  if (section === "awards") return sections.awards.items;
  return null; // film / about have no browsable item list
}

function moveItem(direction) {
  const section = currentSection();
  const items = getSectionItems(section);

  if (!items) return; // nothing to browse in this section

  const itemCount = items.length;

  itemIndex += direction;

  if (itemIndex < 0) itemIndex = itemCount - 1;
  if (itemIndex >= itemCount) itemIndex = 0;

  playNavigateSound();

  if (section === "music") {
    updateMusicSelection();

    const el = document.querySelector(`.music-card[data-index="${itemIndex}"]`);
    if (el) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  if (section === "awards") {
    updateAwardItem();

    const el = document.querySelector(
      `#award-item-list .project-item[data-index="${itemIndex}"]`,
    );
    if (el) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }
}

function openSelectedItem() {
  const section = currentSection();
  const items = getSectionItems(section);

  if (!items) return;

  const item = items[itemIndex];

  if (!item) return;

  if (!item.url || item.url === "#") {
    console.log(`Selected: ${item.title}`);
    return;
  }

  playSound(enterSfx);
  window.open(item.url, "_blank");
}

/* =========================================================
   SECTION SWITCHING
   ========================================================= */

function updateSection(playAudio = true) {
  navigationItems.forEach((item, index) => {
    item.classList.toggle("selected", index === sectionIndex);
  });

  const section = currentSection();

  creativeLabel.textContent = sections[section].label;

  itemIndex = 0; // reset item selection whenever the section changes

  if (playAudio) {
    playNavigateSound();
  }

  if (section === "film") {
    renderFilm();
  }

  if (section === "music") {
    renderMusic();
  }

  if (section === "about") {
    renderAbout();
  }

  if (section === "awards") {
    renderAwards();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();

    sectionIndex--;

    if (sectionIndex < 0) {
      sectionIndex = navigationItems.length - 1;
    }

    updateSection();
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();

    sectionIndex++;

    if (sectionIndex >= navigationItems.length) {
      sectionIndex = 0;
    }

    updateSection();
    return;
  }

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

  if (event.key === "Enter") {
    event.preventDefault();
    openSelectedItem();
    return;
  }

  if (event.key === "Escape") {
    playSelectSound();

    setTimeout(() => {
      window.location.href = "home.html";
    }, 150);
  }
});

navigationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    sectionIndex = index;
    updateSection();
  });

  item.addEventListener("mouseenter", () => {
    if (sectionIndex !== index) {
      sectionIndex = index;
      updateSection();
    }
  });
});

updateSection(false); // no sound on initial load
