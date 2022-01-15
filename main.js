const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  const Intersection = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('show-visible')
            observer.unobserve(entry.target)
        }
    })
    
  }

  const observer = new IntersectionObserver(Intersection, options);
  document.querySelectorAll('show').forEach(function(r){
      observer.observe(r)
  })
