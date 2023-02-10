const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
  
 menu.addEventListener("click", ()=>{
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");

  })
  
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("is-active");
  menuLinks.classList.remove("active");

}))
