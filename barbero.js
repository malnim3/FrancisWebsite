function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
    
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".nav-menu");
    const pic = document.querySelector(".grid-container");
    
      menu.addEventListener("click", ()=>{
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
        pic.classList.toggle("dis");
      })
    
      document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        menu.classList.remove("is-active");
        menuLinks.classList.remove("active");
        pic.classList.remove("dis");
      }))
  