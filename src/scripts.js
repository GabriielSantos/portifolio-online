// Expandir e ocultar menu lateral em celulares
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
  menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x') &&
      menuMobile.classList.add('bg-danger')
    : menuMobile.classList.replace('bi-x', 'bi-list') &&
      menuMobile.classList.remove('bg-danger');
  body.classList.toggle('menu-nav-active');
});

// Fechar menu lateral quando usar os atalhos
const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (body.classList.contains('menu-nav-active')) {
      body.classList.remove('menu-nav-active');
      menuMobile.classList.replace('bi-x', 'bi-list') &&
        menuMobile.classList.remove('bg-danger');
    }
  });
});

// Trocar classe active quando clicar em item
let btnContainer = document.getElementById('navbar');
let btns = btnContainer.getElementsByClassName('nav-link');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click',() => {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// // Tirar o alert após 5 segundos
// setTimeout(() => {
//   document.querySelector('#alerta').style.display = 'none';
// }, 5000);

// Ativar Dark mode
const carddark = document.querySelectorAll('.card');
const sectionDark = document.querySelectorAll('.section-bg');

const darkMode = () => {
  let element = document.html
  element.classList.toggle('dark-mode');
  sectionBgDark();
  cardDark();
}
export default darkMode;

function cardDark() {
  const cardExample = document.querySelector('#cardtest');
  cardExample.classList.contains('card-dark')
    ? carddark.forEach((element) => {
        element.classList.remove('card-dark');
      })
    : carddark.forEach((element) => {
        element.classList.add('card-dark');
      });
}

function sectionBgDark() {
  const sectionExample = document.querySelector('#competencias');
  sectionExample.classList.contains('section-bg')
    ? sectionDark.forEach((element) => {
        element.classList.replace('section-bg', 'section-bg-dark');
      })
    : sectionDark.forEach((element) => {
        element.classList.replace('section-bg-dark', 'section-bg');
      });
}