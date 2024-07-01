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
  let elements = document.querySelectorAll('.menu,.welcome,.big__logo,.price__head,.send,.portfolio__head,.portfolio__content-all-text-left,.portfolio__content-all-text-right,.portfolio__left-images,.portfolio__right-images,.contacts__head,.input,.send__info');
  
  for (let elm of elements) {
    observer.observe(elm);
  }