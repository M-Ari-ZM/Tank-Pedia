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

// Filter
const dropdowns = [
  document.getElementById("filterTipe"),
  document.getElementById("filterNgr"),
  document.getElementById("filterEra"),
];

const items = document.querySelectorAll(".item");
const noticeCard = document.getElementById("alert");
const notice = document.getElementById("noMatch");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("change", filterItems);
});

function filterItems() {
  const tipe = document.getElementById("filterTipe").value;
  const ngr = document.getElementById("filterNgr").value;
  const era = document.getElementById("filterEra").value;

  let found = 0;

  items.forEach((item) => {
    const matchTipe = tipe === "all" || item.dataset.tipe === tipe;
    const matchNgr = ngr === "all" || item.dataset.ngr === ngr;
    const matchEra = era === "all" || item.dataset.era === era;

    if (matchTipe && matchNgr && matchEra) {
      item.classList.remove("hidden");
      item.style.gridColumn = "span 1 / span 1";
      item.style.gridRow = "span 1 / span 1";
      item.style.animation = "itemIn 0.25s linear";
      found++;
    } else {
      item.classList.add("hidden");
    }

    if (found === 0) {
      noticeCard.style.display = "flex";
      noticeCard.style.animation = "itemIn 0.25s linear";
      notice.innerHTML =
        "<b>Maaf!</b> Tank yang anda cari masih dalam <b>tahap produksi</b> :(";
    } else {
      noticeCard.style.display = "none";
    }
  });
}
// Reset Btn
resetBtn.addEventListener("click", () => {
  dropdowns.forEach((d) => (d.value = "all"));
  items.forEach((item) => {
    item.classList.remove("hidden");
    item.style.gridColumn = "";
    item.style.gridRow = "";
    item.style.animation = "itemIn 0.25s linear";
  });

  noticeCard.style.display = "none";
});

// Image Modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModal = document.getElementById("closeModal");

  // Ambil semua gambar dari galeri bawah
  const images = document.querySelectorAll(".gallery-bottom img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modalImg.src = img.src;
      modalCaption.textContent = img.alt || "";

      // animasi zoom muncul
      setTimeout(() => {
        modalImg.classList.remove("scale-95", "opacity-0");
        modalImg.classList.add("scale-100", "opacity-100");
      }, 10);
    });
  });

  // Tutup modal dengan tombol X
  closeModal.addEventListener("click", () => {
    closeModalModal();
  });

  // Tutup modal dengan klik area gelap
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalModal();
  });

  // Tutup dengan ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalModal();
  });

  function closeModalModal() {
    // animasi keluar
    modalImg.classList.remove("scale-100", "opacity-100");
    modalImg.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 100);
  }
});
