const hamburger = document.getElementById('nav-menu'),
    navOpen = document.getElementById('nav-Open'),
    navClose = document.getElementById('nav-close'),
    myBg = document.getElementById('rmvBg');

navOpen.addEventListener('click', ()=>{
    hamburger.classList.add('show-menu');
    myBg.classList.add('goFullScreen');
})
navClose.addEventListener('click', ()=>{
    hamburger.classList.remove('show-menu');
    myBg.classList.remove('goFullScreen');
})

myBg.addEventListener('click', ()=>{
    myBg.classList.remove('goFullScreen');
    hamburger.classList.remove('show-menu');
})
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n => n.addEventListener('click', ()=>{
    myBg.classList.remove('goFullScreen');
    hamburger.classList.remove('show-menu');
}))