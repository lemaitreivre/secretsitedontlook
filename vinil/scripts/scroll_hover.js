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
  let elements = document.querySelectorAll('.price__title,.price__text,.serv__text,.serv__img,.about__title,.about__text,.about__item,.welcome,.big__logo,.menu,.form__title,.price__text,.price__head,.portfolio__inner-title,.portfolio__inner-text,.portfolio__content-all-text-left,.portfolio__content-all-text-right,.portfolio__right-images,.send,.contacts__head,.input,.send__info,.portfolio__head,.portfolio__content-all-text-right,.portfolio__left-images');
  
  for (let elm of elements) {
    observer.observe(elm);
  }