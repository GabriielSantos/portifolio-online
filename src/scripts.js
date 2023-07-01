// Expandir e ocultar menu lateral em celulares
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x") &&
      menuMobile.classList.add("bg-danger")
    : menuMobile.classList.replace("bi-x", "bi-list") &&
      menuMobile.classList.remove("bg-danger");
  body.classList.toggle("menu-nav-active");
});

// Fechar menu lateral quando usar os atalhos
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list") &&
        menuMobile.classList.remove("bg-danger");
    }
  });
});

// Trocar classe active quando clicar em item
let btnContainer = document.getElementById("navbar");
let btns = btnContainer.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}