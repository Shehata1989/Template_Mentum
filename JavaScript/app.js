const navigation = document.querySelector("header > .navigation"),
  bar = document.querySelector("header .bar i");

navigation.addEventListener("click", (e) => e.stopPropagation());

bar.onclick = function () {
  navigation.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (e.target != navigation && e.target !== bar) {
    navigation.classList.remove("active");
  }
});


// #####################################################################

const slide = document.querySelectorAll(".slider-container .slide"),
  wrapper = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button"),
  pagination = document.querySelector(".pagination ul");
let currentIndex = 0,
  slidesCount = slide.length;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("fa-arrow-left")) {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = slidesCount - 1;
      }
      slider();
    }
    if (btn.classList.contains("fa-arrow-right")) {
      currentIndex++;
      if (currentIndex === slidesCount) {
        currentIndex = 0;
      }
      slider();
    }
  });
});

function slider() {
  wrapper.style.transform = `translatex(-${currentIndex * 100}%)`;
}

// #####################################################################

let warpperContainer = document.querySelector(".portfolio .warpper-container"),
  control = document.querySelectorAll(".portfolio .control ul li");

control.forEach((li) => {
  li.addEventListener("click", (e) => {
    control.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    currentIndex = li.getAttribute("data-index");
    warpperContainer.style.transform = `translatey(-${currentIndex * 100}%)`;
  });
});

// #####################################################################
let skillsSec = document.querySelector(".about .row");
let skills = document.querySelectorAll(".skills .skill #progress");

window.addEventListener("scroll", () => {
  if (scrollY >= skillsSec.offsetTop - 200) {
    skills.forEach((span) => {
      span.style.width = span.dataset.w;
      span.style.width = span.dataset.w;
    });
  }
});
