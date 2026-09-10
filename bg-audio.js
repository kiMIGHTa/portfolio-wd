function getBgAudio() {
  try {
    if (window.top !== window.self) {
      return window.top.document.getElementById("bg-sfx");
    }
  } catch (e) {
    //
    console.warn("Playback blocked:", e.name, e.message);
  }
  return document.getElementById("bg-sfx"); // fallback if loaded standalone
}
