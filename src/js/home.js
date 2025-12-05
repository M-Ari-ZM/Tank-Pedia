// Typing Animation
var typed = new Typed(".auto-type", {
  strings: [
    "Halo Komandan!",
    "Hello Commander!",
    "Bonjour Commandant!",
    "Hallo Kommandant!",
    "Привет, командир!",
    "こんにちは、司令官!",
  ],
  typeSpeed: 80,
  backSpeed: 50,
  // backDelay: 500,
  // startDelay: 1000,
  loop: true,
});

// btn Hero
document.getElementById("btnHero").addEventListener("click", function () {
  const target = document.getElementById("article");

  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Scroll Article
const productContainer = [...document.querySelectorAll(".list-article")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// Scroll to Top Btn
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.style.animation = "sttIn 0.2s linear";
    setTimeout(() => {
      scrollToTopBtn.style.display = "block";
    }, 130);
  } else {
    scrollToTopBtn.style.animation = "sttOut 0.2s linear";
    setTimeout(() => {
      scrollToTopBtn.style.display = "none";
    }, 130);
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// sttBtn Stop
function sttBtnStop() {
  const sttBtn = document.getElementById("scrollToTopBtn");
  const footer = document.getElementById("footer");

  if (window.innerWidth < 640) {
    sttBtn.style.bottom = "80px";
    return;
  }

  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const overlap = windowHeight - footerRect.top;

  if (overlap > 0) {
    sttBtn.style.bottom = overlap + 20 + "px";
  } else {
    sttBtn.style.bottom = "20px";
  }
}
window.addEventListener("scroll", sttBtnStop);
window.addEventListener("resize", sttBtnStop);

// BGM Control
const judul = document.getElementById("judul");
const audio = document.getElementById("bgm");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

audio.volume = 0.3;

const songs = [
  "./public/audio/Panzerlied.mp3",
  "./public/audio/Tri Tankista.mp3",
  "./public/audio/Over There.mp3",
];
let songIndex = 0;

function loadSong(index) {
  const songPath = songs[index];
  audio.src = songPath;

  // tampilkan nama file tanpa path & ekstensi
  const name = songPath.split("/").pop().replace(".mp3", "");
  judul.textContent = name;
}

function playSong() {
  audio.play();
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
loadSong(songIndex);

// bgmBtn Stop
function bgmBtnStop() {
  const bgmBtn = document.getElementById("bgmBtn");
  const footer = document.getElementById("footer");

  if (window.innerWidth < 640) {
    bgmBtn.style.bottom = "20px";
    return;
  }

  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const overlap = windowHeight - footerRect.top;

  if (overlap > 0) {
    bgmBtn.style.bottom = overlap + 20 + "px";
  } else {
    bgmBtn.style.bottom = "20px";
  }
}
window.addEventListener("scroll", bgmBtnStop);
window.addEventListener("resize", bgmBtnStop);
