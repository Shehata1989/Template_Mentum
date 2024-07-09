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
        currentIndex = 0;
      }
      slider();
    }
    if (btn.classList.contains("fa-arrow-right")) {
      currentIndex++;
      if (currentIndex === slidesCount) {
        currentIndex = slidesCount - 1;
      }
      slider();
    }
  });
});

function slider() {
  wrapper.style.transform = `translatex(-${currentIndex * 100}%)`;
}

// #####################################################################

let framesContainer = document.querySelector(".frames-container"),
  control = document.querySelectorAll(".portfolio .control ul li");

  control.forEach((li) => {
    li.addEventListener("click", (e) => {
      control.forEach((li) => {
        li.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      currentIndex = li.getAttribute("data-index");
      framesContainer.style.transform = `translatey(-${currentIndex * 100}%)`;
    });
  });
