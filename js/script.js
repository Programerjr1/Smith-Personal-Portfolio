const nav_btn = document.querySelector('.nav_toggle_btn');
const nav_menu = document.querySelector('.nav-menu');

nav_btn.onclick = () =>{
   nav_btn.classList.toggle('active');
   nav_menu.classList.toggle('active');
}

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});