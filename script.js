const videos = [
  {
    title: "Dj Urška performing live at 'Klub K4'",
    subtitle: "Ljubljana, Slovenia -  06/2027",
    src: "assets/video1.mp4"
  },
  {
    title: "Dj Urška leaving stage at Butik festival",
    subtitle: "Tolmin, Slovenia -  07/2027",
    src: "assets/video4.mp4"
  },
  {
    title: "Leaked recording from 'Berghain'",
    subtitle: "Berlin, Germany -  09/2027",
    src: "assets/video3.mp4"
  },
  {
    title: "Dj Urška improvising live at 'Rote Sonne'",
    subtitle: "Munich, Germany -  08/2027",
    src: "assets/video2.mp4"
  },
  {
    title: "Dj Urška testing new sounds at 'Womb'",
    subtitle: "Tokyo, Japan -  09/2027",
    src: "assets/video5.mp4"
  },
  ,
  {
    title: "Recovered footage from a gig at 'Fabric'",
    subtitle: "London, England -  10/2027",
    src: "assets/video6.mp4"
  },
  {
    title: "Dj Urška presenting a new set at 'Brookyln Mirage'",
    subtitle: "New York, USA -  11/2027",
    src: "assets/video8.mp4"
  },
  {
    title: "A moment from Dj Urška's appearance at 'Primavera Sound'",
    subtitle: "Porto, Portugal -  05/2027",
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

function shufflePlaylist() {
  for (let i = playlist.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [playlist[i], playlist[randomIndex]] = [playlist[randomIndex], playlist[i]];
  }

  playlistIndex = 0;
}

function playNextVideo() {

  if (playlist.length === 0 || playlistIndex >= playlist.length) {

    playlist = [...videos];
    shufflePlaylist();
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
  updateMuteButton();
});

let currentLang = "en";

window.addEventListener("DOMContentLoaded", () => {

  setLanguage(currentLang);

  const firstVideo = videos[0];

  video.src = firstVideo.src;

  videoTitle.textContent = firstVideo.title;

  videoSubtitle.textContent = firstVideo.subtitle;

  video.play();

  playlist = videos.slice(1);

  shufflePlaylist();

  updateMuteButton();


});

function updateMuteButton() {

  if (video.muted) {

    muteBtn.textContent = translations[currentLang].muteOn;

    muteBtn.classList.add("glow");

  } else {

    muteBtn.textContent = translations[currentLang].muteOff;

    muteBtn.classList.remove("glow");

  }

}

const translations = {
  en: {
    nextBtn: "Drop Another One!",
    muteOn: "Club Mode",
    muteOff: "Respect the Neighbors",
    aboutTitle: "About DJ Urška",
    aboutP1: "DJ Urška was born in 1988 and raised in Ljubljana, Slovenia. She currently lives in Munich, Germany.",
    aboutP2: "Growing up in a musical family, she developed a passion for music from an early age. Besides playing the guitar, she sings in several ensembles, including a cappella groups and a jazz band.",
    aboutP3: "Her interest in DJing began when friends asked her to DJ at their wedding. Inspired by the experience, she bought her first DJ controller and started exploring the craft on her own.",
    aboutP4: `In 2026, she received a birthday gift that marked another highlight of her DJ journey: three 45-minute personal DJ workshops at <a href="https://www.raum45.de/" target="_blank" rel="noopener noreferrer">Raum 45</a> with the renowned Munich-based DJ Felix Gott.`,
    aboutP5: "Outside of music, Urška holds a doctoral degree in mathematics. Whether it is her analytical mindset and years of mathematical training that allow her to craft such memorable sets, or simply pure talent, remains a subject of ongoing debate.",
  },
  slo: {
    nextBtn: "Full dober!",
    muteOn: "Full super",
    muteOff: "Lepo!",
    aboutTitle: "DJ Urška - biografija",
    aboutP1: "DJ Urška se je rodila leta 1988 in odraščala v Ljubljani, Slovenija. Trenutno živi v Münchnu v Nemčiji.",
    aboutP2: "Odraščala je v glasbeni družini, zato je že zelo zgodaj razvila ljubezen do glasbe. Poleg igranja kitare poje v več glasbenih zasedbah, med drugim v a cappella skupinah in jazzovski zasedbi.",
    aboutP3: "Njeno zanimanje za DJ-anje se je začelo, ko so jo prijatelji povabili, da nastopi kot DJ na njihovi poroki. Izkušnja jo je navdušila, zato si je kupila svoj prvi DJ kontroler in začela samostojno raziskovati svet DJ-anja.",
    aboutP4: `Leta 2026 je za rojstni dan prejela darilo, ki je pomenilo novo pomembno prelomnico na njeni glasbeni poti: tri 45-minutne individualne DJ delavnice v <a href="https://www.raum45.de/" target="_blank" rel="noopener noreferrer">Raum 45</a> z uveljavljenim münchenskim DJ-em Felixom Gottom.`,
    aboutP5: "Poleg glasbe je Urška doktorica matematike. Ali so prav njen analitični način razmišljanja in leta matematičnega izobraževanja zaslužni za njene tako dovršene in nepozabne DJ sete ali pa gre preprosto za izjemen talent, ostaja predmet živahnih razprav."
  }
};


function setLanguage(lang) {
  currentLang = lang;

  document.getElementById("nextBtn").textContent = translations[lang].nextBtn;
  document.getElementById("aboutTitle").textContent = translations[lang].aboutTitle;
  document.getElementById("aboutP1").textContent = translations[lang].aboutP1;
  document.getElementById("aboutP2").textContent = translations[lang].aboutP2;
  document.getElementById("aboutP3").textContent = translations[lang].aboutP3;
  document.getElementById("aboutP4").innerHTML = translations[lang].aboutP4;
  document.getElementById("aboutP5").textContent = translations[lang].aboutP5;



  updateMuteButton();
}

document.getElementById("langEn").addEventListener("click", () => setLanguage("en"));
document.getElementById("langSlo").addEventListener("click", () => setLanguage("slo"));