const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Add event listeners to the buttons
document.querySelector('.sliderMenu-location').addEventListener('click', function (event) {
  if (event.target.tagName === 'P') {
    currentSlide = Array.from(this.children).indexOf(event.target);
    showSlide(currentSlide);
  }
});

document.querySelector('.slide-text-right button').addEventListener('click', nextSlide);

//  Acardion
const oneAcardeon = document.querySelector(".oneLabel");
const twoAcardeon = document.querySelector(".twoLabel");
const thereeLabel = document.querySelector(".thereeLabel");
const forAcardeon = document.querySelector(".forLabel");

let onecloss = document.querySelector(".content-one");
let twocloss = document.querySelector(".content-two");
let thereecloss = document.querySelector(".theree-content");
let forcloss = document.querySelector(".for-content");

oneAcardeon.addEventListener("click", () => {
  if (true) {
    onecloss.classList.toggle("hiddn"),
      twocloss.classList.add("hiddn"),
      thereecloss.classList.add("hiddn"),
      forcloss.classList.add("hiddn");
  }
});
twoAcardeon.addEventListener("click", () => {
  if (true) {
    onecloss.classList.add("hiddn"),
      twocloss.classList.toggle("hiddn"),
      thereecloss.classList.add("hiddn"),
      forcloss.classList.add("hiddn");
  }
});
thereeLabel.addEventListener("click", () => {
  if (true) {
    onecloss.classList.add("hiddn"),
      twocloss.classList.add("hiddn"),
      thereecloss.classList.toggle("hiddn"),
      forcloss.classList.add("hiddn");
  }
});
forAcardeon.addEventListener("click", () => {
  if (true) {
    onecloss.classList.add("hiddn"),
      twocloss.classList.add("hiddn"),
      thereecloss.classList.add("hiddn"),
      forcloss.classList.toggle("hiddn");
  }
});
