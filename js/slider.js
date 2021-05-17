const track = document.querySelector(".carousel__tracker");
const slider = Array.from(track.children);
const prevBtn = document.querySelector(".carousel__bprev--prev");
const nextBtn = document.querySelector(".carousel__bnext--next");
const dots = document.querySelector(".carousel__nav");
const dot = Array.from(dots.children);
const slideWidth = slider[0].getBoundingClientRect().width;

const setSliderPosition = (slider, index) => {
  slider.style.left = slideWidth * index + "px";
};

slider.forEach(setSliderPosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const hideShowArrow = (slider, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("set-hidden");
    nextBtn.classList.remove("set-hidden");
  } else if (targetIndex === slider.length - 1) {
    prevBtn.classList.remove("set-hidden");
    nextBtn.classList.add("set-hidden");
  } else {
    prevBtn.classList.remove("set-hidden");
    nextBtn.classList.remove("set-hidden");
  }
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  counter++;

  const nextIndex = slider.findIndex((slide) => slide === nextSlide);
  hideShowArrow(slider, prevBtn, nextBtn, nextIndex);

  const currentNavBtn = dots.querySelector(".current-slide");
  const nextNavBtn = currentNavBtn.nextElementSibling;
  updateDots(currentNavBtn, nextNavBtn);
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  counter--;

  const prevIndex = slider.findIndex((slide) => slide === prevSlide);
  hideShowArrow(slider, prevBtn, nextBtn, prevIndex);

  const currentNavBtn = dots.querySelector(".current-slide");
  const prevNavBtn = currentNavBtn.previousElementSibling;
  updateDots(currentNavBtn, prevNavBtn);
});

dots.addEventListener("click", (e) => {
  const targetDot = e.target.closest("div");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dots.querySelector(".current-slide");
  const targetIndex = dot.findIndex((dot) => dot === targetDot);
  const targetSlide = slider[targetIndex];
  counter = targetIndex;
  // console.log(targetIndex);
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrow(slider, prevBtn, nextBtn, targetIndex);
});

// Automation

const restartCurrentSlide = (track, dots) => {
  track.firstElementChild.classList.add("current-slide");
  track.lastElementChild.classList.remove("current-slide");
  dots.firstElementChild.classList.add("current-slide");
  dots.lastElementChild.classList.remove("current-slide");
  track.style.transform = `translateX(0px)`;
  track.style.transition = "700ms ease";
  counter = 0;
};

let counter = slider.length - slider.length; // to make it possible to add more img without changing the js code.
function autoSliders() {
  setTimeout(function autoSlider() {
    const track = document.querySelector(".carousel__tracker");
    const currentSlide = track.querySelector(".current-slide"); // For the function of the slide = moveToSlide and restartCurrentSlide
    const nextSlide = currentSlide.nextElementSibling;

    const dots = document.querySelector(".carousel__nav");
    const currentNavBtn = dots.querySelector(".current-slide"); // For the function of the dots = updateDots and restartCurrentSlide
    const nextNavBtn = currentNavBtn.nextElementSibling;

    counter++; // to make the counter = 1 before executing
    if (counter === slider.length) {
      // if the length of the slider is equal, it restarts.
      restartCurrentSlide(track, dots); // Restarting the currentslide in the firstchild of dots and track;
    } else {
      // Next slides
      track.style.transition = "ease 700ms";
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentNavBtn, nextNavBtn);
      // console.log(counter);
    }
    if (counter === 0) {
      // for the button to hide and show
      prevBtn.classList.add("set-hidden");
      nextBtn.classList.remove("set-hidden");
    } else if (counter === slider.length - 1) {
      prevBtn.classList.remove("set-hidden");
      nextBtn.classList.add("set-hidden");
    } else {
      prevBtn.classList.remove("set-hidden");
      nextBtn.classList.remove("set-hidden");
    }
  }, 3000); // Set the time before executing autosliders for autoslider
  setTimeout(autoSliders, 8000); // Set the time before the track go next
}

// If the counter is changed for some reason, the automation will not work!!
// let green = 0;
// function pauseSlider() {
//    green = 0;
//    if(green === 0) {
//       green++;
//       return;
//    } else {
//       autoSliders();
//    }
//    console.log(green)
// }
// pauseSlider();
// console.log(stopBtn);
if (counter === 0) {
  autoSliders();
} else {
  console.log("Automation Not Working");
}
// console.log(counter)
