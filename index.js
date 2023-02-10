const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const pic = document.querySelector(".grid-container");
const vid = document.querySelector(".row");
const vid2 = document.querySelector(".vid");

  menu.addEventListener("click", ()=>{
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    vid.classList.toggle("disapear");
    vid2.classList.toggle("disapear2");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
    vid.classList.remove("disapear");
    vid2.classList.remove("disapear2");
  }))