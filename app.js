const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundcolor ='#29323c';
    } else{
        header.style.backgroundcolor = 'transparent';
    }
});