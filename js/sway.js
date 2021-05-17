const closeBtns = document.querySelectorAll('.modal-close');
const closeBtn = Array.from(closeBtns);
const signinModal = document.querySelector('.signin-modal');
const loginModal = document.querySelector('.login-modal');
const loginBtn = document.querySelector('.login');
const signinBtn = document.querySelector('.signin');
const mainContent = document.querySelector('.main-content');



// let click = 0;


// Events
loginBtn.addEventListener('click',() =>{
    loginModal.classList.add('sway-in');
    mainContent.classList.add('fade-out');
    loginBtn.classList.add('fade-out');
    signinBtn.classList.add('fade-out');
});
signinBtn.addEventListener('click',() =>{
    signinModal.classList.add('sway-in');
    mainContent.classList.add('fade-out');
    loginBtn.classList.add('fade-out');
    signinBtn.classList.add('fade-out');
});

closeBtn[0].addEventListener('click', () => {
    loginModal.classList.remove('sway-in');
    signinModal.classList.remove('sway-in');
    mainContent.classList.remove('fade-out');
    loginBtn.classList.remove('fade-out');
    signinBtn.classList.remove('fade-out');
});
closeBtn[1].addEventListener('click', () => {
    loginModal.classList.remove('sway-in');
    signinModal.classList.remove('sway-in');
    mainContent.classList.remove('fade-out');
    signinBtn.classList.remove('fade-out');
    loginBtn.classList.remove('fade-out');
    signinBtn.classList.remove('fade-out');
});
