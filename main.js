

function animateCounter(element, target) {
    let start = 0;
    let end = target;
    let duration = 2000; 
    let stepTime = Math.abs(Math.floor(duration / end));
    
    let timer = setInterval(function() {
      start += 1;
      element.innerText = start;
      if (start == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
 
  let section = document.getElementById('counter-section');
  let counters = document.querySelectorAll('.counter');
  let sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          let target = +counter.getAttribute('data-target');
          animateCounter(counter, target);
        });
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.5 }); 
  
  sectionObserver.observe(section);






  