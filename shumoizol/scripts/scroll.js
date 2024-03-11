let lastScroll = 0;
const defaulOffset = 200;
const header = document.querySelector('.menu');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; 
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll',() => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaulOffset){
        //scroll down
        header.classList.add('hide');
        console.log('down');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        console.log('up');
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();

})