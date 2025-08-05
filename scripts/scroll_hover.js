function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
      
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.serv__title,.serv__text,.serv__img,.about__title,.about__text,.about__item,.welcome,.big__logo,.menu,.form__title,.form,.form__head,.portfolio__inner-title,.portfolio__inner-text,.left-img-port,.right-img-port,.triple__photo-img,.portfolio__content-all-text,.single-img,.portfolio__content-all-text-left,.portfolio__content-all-text-right,.portfolio__right-images,.portfolio__left-images,.send,.input,.contacts__head,.send__info,.first_send,.portfolio__head,.portfolio__title,.mobile__menu,.portfolio__images');
  
  for (let elm of elements) {
    observer.observe(elm);
  }