const hamburger = document.querySelector('.hamburger');
const iconClose = document.querySelector('.ex');
const menuOpen = document.querySelector('.menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('close');
    iconClose.classList.add('open');
    menuOpen.classList.add('open');
});
 iconClose.addEventListener('click', () =>{
    hamburger.classList.remove('close');
    iconClose.classList.remove('open');
    menuOpen.classList.remove('open');
});
