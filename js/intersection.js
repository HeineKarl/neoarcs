const header = document.querySelector('.hero');
const main = document.querySelector('.main');
const navLinks = document.querySelectorAll('.nav-link');
const signin = document.querySelector('.signin');
const login = document.querySelector('.login');
const wordmark = document.querySelector('.name');

const mainOption = {
    rootMargin: '-100px'
}

const mainObserver = new IntersectionObserver((entries, mainObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('bgclr-change');
            // navLinks.classList.add('clr-change');
        } else {
            header.classList.remove('bgclr-change');
            
        }
    });
}, mainOption)

// mainObserver.observe(main);


// Features Obeserved

const features = document.querySelector('.features').children;
const feature = Array.from(features);
const leftColumns = document.querySelectorAll('.left-column');
const leftColumn = Array.from(leftColumns);
const rightColumns = document.querySelectorAll('.right-column');
const rightColumn = Array.from(rightColumns);
// console.log(rightColumns);
let i = 0;
const featureOption = {rootMargin: '-300px'}
const featureObserver = new IntersectionObserver((entries, featureObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            // console.log('Hello');
            return;
        } else {
            if(i % 2 === 0) {
                leftColumn[i].classList.add('fade');
                rightColumn[i].classList.add('fade');
                i++;
            } else {
                leftColumn[i].classList.add('fade');
                rightColumn[i].classList.add('fade');
                i++;
            }
            featureObserver.unobserve(entry.target);
        }
    });
}, featureOption);

// feature.forEach(feature => {
//     featureObserver.observe(feature);
// });

let observed = 0;

if(observed === 0) {
    mainObserver.observe(main);
    feature.forEach(feature => {
        featureObserver.observe(feature);
    });
} else if (observed === 1) {
    mainObserver.observe(main);
} else if (observed === 2) {
    feature.forEach(feature => {
        featureObserver.observe(feature);
    });
} else {
    alert('Intersection Observer not working');
}