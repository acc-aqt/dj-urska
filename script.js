const videos = [
  {
    title: "Dj Urška performing live at 'Klub K4' in Ljubljana, Slovenia -  06/2027",
    src: "assets/video1.mp4"
  },
  {
    title: "Dj Urška leaving stage at 'Butik festical' in Tolmin, Slovenia -  07/2027",
    src: "assets/video4.mp4"
  },
  {
    title: "Leaked recording from 'Berghain' in Berlin, Germany -  09/2027",
    src: "assets/video3.mp4"
  },
  {
    title: "Dj Urška performing live at 'Rote Sonne' in Munich, Germany -  08/2027",
    src: "assets/video2.mp4"
  },
];

const video = document.getElementById("video");
const videoTitle = document.getElementById("videoTitle");
const nextBtn = document.getElementById("nextBtn");
const muteBtn = document.getElementById("muteBtn");

let currentIndex = -1;

function playRandomVideo() {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * videos.length);
  } while (videos.length > 1 && newIndex === currentIndex);

  currentIndex = newIndex;

  video.src = videos[currentIndex].src;
  videoTitle.textContent = videos[currentIndex].title;

  video.play();
}

nextBtn.addEventListener("click", playRandomVideo);

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "Club Mode" : "Respect the neighbors";
});

window.addEventListener("DOMContentLoaded", playRandomVideo);