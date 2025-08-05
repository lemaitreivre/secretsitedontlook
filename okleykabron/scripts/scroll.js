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
const header = document.querySelector('.menu');
const containActive = () => mobileMenuInner.classList.contains('active__menu');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; 
const containHide = () => header.classList.contains('hide');
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
    lastScroll = scrollPosition();

})