
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


const darkMode1 = () => {
  // Ativar Dark mode
  const carddark = document.querySelectorAll('.card');
  const sectionDark = document.querySelectorAll('section-bg');
  
  let element = document.querySelector('html')
  element.classList.toggle('dark-mode');
  sectionBgDark();
  cardDark();


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
}

// Ativar Dark mode Bootstrap5
const darkMode = () => {
  
  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector('form-check-input')
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
}

export default darkMode;