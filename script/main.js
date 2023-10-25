// Toggle & Responsive Navigation

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector('nav');
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navList.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Hapus Form Setelah Go Back
  
  window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
          form.reset();
      }
  };
  

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('animate-fadeIn')) {
          entry.target.classList.add('fadeIn');
        }
  
        if (entry.target.classList.contains('animate-slideIn')) {
          entry.target.classList.add('slideIn');
        }
  
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  fadeIn.forEach(item => {
    observer.observe(item);
  });
  
  slideIn.forEach(item => {
    observer.observe(item);
  });
  

  