const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  menu.classList.toggle("overlay");
});
