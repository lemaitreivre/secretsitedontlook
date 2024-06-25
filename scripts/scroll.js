/*let lastScroll = 0;
const defaulOffset = 200;
const header = document.querySelector('.menu');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; 
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll',() => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaulOffset){
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();

})*/
let lastScroll = 0;
const defaulOffset = 200;
const defaulOffset2 = 50;
const header = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile__menu'); 
const mobileMenuInner = document.querySelector('.mobile__menu_inner'); 
const containActive = () => mobileMenuInner.classList.contains('active__menu');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; 
const containHide = () => header.classList.contains('hide');
const containHideMobile = () => mobileMenu.classList.contains('hide');
$(document).ready(function() {
    /* mobile menu */
    $('.menu__burger').click(function(){
        $('.menu__mobile').toggle(500);
        if (!containActive()){
            mobileMenuInner.classList.add('active__menu');
        }
        else if (containActive()){
            mobileMenuInner.classList.remove('active__menu');
        }
    })
}); 
window.addEventListener('scroll',() => {
    // Для обычного меню
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaulOffset){
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }

    // Для мобильного меню
    if(scrollPosition() > lastScroll && !containHideMobile() && scrollPosition() > defaulOffset2){
        //scroll down
        mobileMenu.classList.add('hide');
        if (containActive()){
            $('.menu__mobile').toggle(500);
            mobileMenuInner.classList.remove('active__menu');
        }
    }
    else if(scrollPosition() < lastScroll && containHideMobile()){
        //scroll up
        mobileMenu.classList.remove('hide');
    }
    lastScroll = scrollPosition();

})