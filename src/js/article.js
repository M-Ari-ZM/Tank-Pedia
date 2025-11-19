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

// Search
function srchFunction() {
  // Variabel
  var input, filter, ul, li, a, i, txtValue, card, noticeCard, notice, found;
  input = document.getElementById("srchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("artList");
  li = ul.getElementsByTagName("li");
  card = document.getElementsByClassName("item");
  noticeCard = document.getElementById("alert");
  notice = document.getElementById("noMatch");

  found = 0;

  // Mencari Hasil
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
      card[i].style.animation = "itemIn 0.25s linear";
      found++;
    } else {
      card[i].style.display = "none";
    }
  }

  if (txtValue.length > 0) {
    dropdowns.forEach((d) => (d.value = "all"));
  }

  if (found === 0) {
    noticeCard.style.display = "flex";
    noticeCard.style.animation = "itemIn 0.25s linear";
    notice.innerHTML =
      "<b>Maaf!</b> Tank yang anda cari masih dalam <b>tahap produksi</b> :(";
  } else {
    noticeCard.style.display = "none";
  }
}

// Filter
const dropdowns = [
  document.getElementById("filterTipe"),
  document.getElementById("filterNgr"),
  document.getElementById("filterEra"),
];

const items = document.querySelectorAll(".item");
const noticeCard = document.getElementById("alert");
const notice = document.getElementById("noMatch");
const search = document.getElementById("srchInput");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("change", filterItems);
});

function filterItems() {
  search.value = "";

  const tipe = document.getElementById("filterTipe").value;
  const ngr = document.getElementById("filterNgr").value;
  const era = document.getElementById("filterEra").value;

  let found = 0;

  items.forEach((item) => {
    const matchTipe = tipe === "all" || item.dataset.tipe === tipe;
    const matchNgr = ngr === "all" || item.dataset.ngr === ngr;
    const matchEra = era === "all" || item.dataset.era === era;

    if (matchTipe && matchNgr && matchEra) {
      item.style.animation = "itemIn 0.25s linear";
      item.style.display = "block";
      found++;
    } else {
      item.style.display = "none";
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
  items.forEach(
    (item) => (
      (item.style.display = "block"),
      (item.style.animation = "itemIn 0.25s linear")
    )
  );
  search.value = "";
  noticeCard.style.display = "none";
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
      scrollToTopBtn.style.display = "flex";
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
