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
    sttBtn.style.bottom = "20px";
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
