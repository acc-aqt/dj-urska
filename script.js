const videos = [
  {
    title: "Dj Urška performing live at 'Klub K4'",
    subtitle: "Ljubljana, Slovenia -  06/2027",
    src: "assets/video1.mp4"
  },
  {
    title: "Dj Urška leaving stage at 'Butik festical'",
    subtitle: "Tolmin, Slovenia -  07/2027",
    src: "assets/video4.mp4"
  },
  {
    title: "Leaked recording from 'Berghain'",
    subtitle: "Berlin, Germany -  09/2027",
    src: "assets/video3.mp4"
  },
  {
    title: "Dj Urška performing live at 'Rote Sonne'",
    subtitle: "Munich, Germany -  08/2027",
    src: "assets/video2.mp4"
  },
  {
    title: "Dj Urška performing live at 'Womb'",
    subtitle: "Tokyo, Japan -  09/2027",
    src: "assets/video5.mp4"
  },
  ,
  {
    title: "Dj Urška performing live at 'Fabric'",
    subtitle: "London, England -  10/2027",
    src: "assets/video6.mp4"
  },
  {
    title: "Dj Urška performing live at 'Brookyln Mirage'",
    subtitle: "Brooklyn, USA -  11/2027",
    src: "assets/video7.mp4"
  },
];

const video = document.getElementById("video");

const videoTitle = document.getElementById("videoTitle");

const videoSubtitle = document.getElementById("videoSubtitle");

const nextBtn = document.getElementById("nextBtn");

const muteBtn = document.getElementById("muteBtn");

let playlist = [];

let playlistIndex = 0;

function shuffleVideos() {

  playlist = [...videos];

  for (let i = playlist.length - 1; i > 0; i--) {

    const randomIndex = Math.floor(Math.random() * (i + 1));

    [playlist[i], playlist[randomIndex]] = [playlist[randomIndex], playlist[i]];

  }

  playlistIndex = 0;

}

function playNextVideo() {

  if (playlist.length === 0 || playlistIndex >= playlist.length) {

    shuffleVideos();

  }

  const selectedVideo = playlist[playlistIndex];

  playlistIndex++;

  video.src = selectedVideo.src;

  videoTitle.textContent = selectedVideo.title;

  videoSubtitle.textContent = selectedVideo.subtitle;

  video.play();

}

nextBtn.addEventListener("click", playNextVideo);

video.addEventListener("ended", playNextVideo);

muteBtn.addEventListener("click", () => {

  video.muted = !video.muted;

  muteBtn.textContent = video.muted ? "Club Mode" : "Respect the Neighbors";

});

window.addEventListener("DOMContentLoaded", () => {

  shuffleVideos();

  playNextVideo();

});