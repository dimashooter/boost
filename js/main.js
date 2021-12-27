const stock = document.querySelector('.sponsorship'); 
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
      entry.target.classList.toggle('active',entry.isIntersecting);
      
    });
  },
  {
      threshold:1
  }
);

observer.observe(stock);


