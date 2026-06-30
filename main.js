onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const audio = document.getElementById("bg-audio");
  const player = document.getElementById("music-player");
  const toggle = document.getElementById("music-toggle");

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      player.classList.add("is-playing");
    } else {
      audio.pause();
      player.classList.remove("is-playing");
    }
  });

  audio.addEventListener("ended", () => {
    player.classList.remove("is-playing");
  });
};
