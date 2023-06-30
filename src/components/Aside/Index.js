import { Component } from "react";
import { Link } from 'react-router-dom';
import perfil from '../../images/CV.png';
import FooterAside from '../FooterAside';
import './Aside.css';

class Aside extends Component  {
  
  changeTheme = () => {
    const bodyTheme = document.querySelector('.bodyTheme')
    const atribute = bodyTheme.dataset.bsTheme;
    
    if (atribute === 'light') {
      bodyTheme.dataset.bsTheme = 'dark';
      const input = document.querySelectorAll('.text-dark');
      input.forEach((elem) => {
        elem.classList.remove('text-dark');
        elem.classList.add('text-light');
      })
    } else {
      bodyTheme.dataset.bsTheme = 'light';
      const input = document.querySelectorAll('.text-light');
      input.forEach((elem) => {
        elem.classList.remove('text-light');
        elem.classList.add('text-dark');
      })
    }
  }
  render() {
    return (
      <>
      <i className="bi bi-list menu-mobile"></i>
        <aside id="header">
          <section className="profile">
            <img src={ perfil } alt="Foto do Gabriel" />
            <h1>Gabriel Santos</h1>
            <div className="social-links mt-4 text-center">
              <a
                href="https://www.linkedin.com/in/gabrielcsantos-dev/"
                className="bi bi-linkedin"
                target="_blank"
                aria-label="linkedin gabriel"
                title="Linkedin Gabriel Santos" rel="noreferrer"
              ></a>
              <a
                href="https://github.com/GabriielSantos"
                className="bi bi-github"
                title="GitHub Gabriel Santos"
                aria-label="github gabriel"
                target="_blank" rel="noreferrer"
              ></a>
              <a
                href="https://1drv.ms/b/s!AiNIj7dgQIIphMtkNp7hh45FAp6djQ?e=C76uI7"
                className="bi bi-filetype-pdf me-0"
                title="Currículo PDF Gabriel Santos"
                aria-label="curriculo gabriel"
                target="_blank" rel="noreferrer"
              ></a> 
              <a
                href="https://1drv.ms/b/s!AiNIj7dgQIIphMtnGUN3ZkQca7OIOQ?e=v30fT6"
                className="bi bi-filetype-pdf me-0 carta"
                title="Carta Apresentação PDF Gabriel Santos"
                aria-label="carta gabriel"
                target="_blank" rel="noreferrer"
              ></a>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-2 text-white">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={ () => this.changeTheme() }
                />
                <label className="form-check-label" for="darkMode">Modo Noturno</label>
              </div>
            </div>
          </section>
          <section>
            <nav id="navbar" className="nav-menu pt-0">
              <ul className="nav flex-column">
                <Link to="/">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      aria-label="inicio"
                      >
                        <i className="bi bi-house me-2" aria-hidden="true"></i>
                        Início
                    </a>
                  </li>
                </Link>
                <Link to="/sobre">
                  <li className="nav-item">
                    <a className="nav-link" href="/sobre" aria-label="sobre">
                      <i className="bi bi-person me-2" aria-hidden="true"></i>
                      Sobre
                    </a>
                  </li>
                </Link>
                <Link to="/competencias">
                  <li className="nav-item">
                    <a className="nav-link" href="#competencias" aria-label="habilidades">
                        <i className="bi bi-list-check me-2" aria-hidden="true"></i>
                        Competências
                    </a>
                  </li>
                </Link>
                <Link to="/certificados">
                  <li className="nav-item">
                    <a className="nav-link" href="#certificados" aria-label="certificados">
                      <i className="bi bi-patch-check me-2" aria-hidden="true"></i>
                      Certificados
                    </a>
                  </li>
                </Link>
                <Link to="/curriculo">
                  <li className="nav-item">
                    <a className="nav-link" href="#curriculo" aria-label="curriculo">
                      <i className="bi bi-file-earmark me-2" aria-hidden="true"></i>
                      Currículo
                    </a>
                  </li>
                </Link>
                <Link to="/portifolio">
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio" aria-label="portfolio">
                      <i className="bi bi-collection me-2" aria-hidden="true"></i>
                      Portfólio
                    </a>
                  </li>
                </Link>
                <Link to="/contato">
                  <li className="nav-item">
                    <a className="nav-link" href="#contato" aria-label="contato">
                      <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                      Contato
                    </a>
                  </li>
                </Link>
              </ul>
            </nav>
          </section>
        </aside>
        <FooterAside />
      </>
    );
  }
}

export default Aside;