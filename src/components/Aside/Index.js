import { Component } from "react";
import Footer from '../Footer/Index';
import './Aside.css';
import perfil from '../../images/CV.png'
import { Link } from 'react-router-dom';


class Aside extends Component  {
  render() {
    return (
      <>
      <i class="bi bi-list menu-mobile"></i>
        <aside id="header">
          <section class="profile">
            <img src={ perfil } alt="Foto do Gabriel" />
            <h1>Gabriel Santos</h1>
            <div class="social-links mt-4 text-center">
              <a
                href="https://www.linkedin.com/in/gabrielcsantos-dev/"
                class="bi bi-linkedin"
                target="_blank"
                aria-label="linkedin gabriel"
                title="Linkedin Gabriel Santos" rel="noreferrer"
              ></a>
              <a
                href="https://github.com/GabriielSantos"
                class="bi bi-github"
                title="GitHub Gabriel Santos"
                aria-label="github gabriel"
                target="_blank" rel="noreferrer"
              ></a>
              <a
                href="https://1drv.ms/b/s!AiNIj7dgQIIphMtkNp7hh45FAp6djQ?e=C76uI7"
                class="bi bi-filetype-pdf me-0"
                title="Currículo PDF Gabriel Santos"
                aria-label="curriculo gabriel"
                target="_blank" rel="noreferrer"
              ></a> 
              <a
                href="https://1drv.ms/b/s!AiNIj7dgQIIphMtnGUN3ZkQca7OIOQ?e=v30fT6"
                class="bi bi-filetype-pdf me-0 carta"
                title="Carta Apresentação PDF Gabriel Santos"
                aria-label="carta gabriel"
                target="_blank" rel="noreferrer"
              ></a>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-2 text-white">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="darkMode"
                  onclick="darkMode"
                />
                <label class="form-check-label" for="darkMode">Modo Noturno</label>
              </div>
            </div>
          </section>
          <section>
            <nav id="navbar" class="nav-menu pt-0">
              <ul class="nav flex-column">
                <Link to="/">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/"
                      aria-label="inicio"
                      >
                        <i class="bi bi-house me-2" aria-hidden="true"></i>
                        Início
                    </a>
                  </li>
                </Link>
                <Link to="/sobre">
                  <li class="nav-item">
                    <a class="nav-link" href="/sobre" aria-label="sobre">
                      <i class="bi bi-person me-2" aria-hidden="true"></i>
                      Sobre
                    </a>
                  </li>
                </Link>
                <Link to="/competencias">
                  <li class="nav-item">
                    <a class="nav-link" href="#competencias" aria-label="habilidades">
                        <i class="bi bi-list-check me-2" aria-hidden="true"></i>
                        Competências
                    </a>
                  </li>
                </Link>
                <Link to="/certificados">
                  <li class="nav-item">
                    <a class="nav-link" href="#certificados" aria-label="certificados">
                      <i class="bi bi-patch-check me-2" aria-hidden="true"></i>
                      Certificados
                    </a>
                  </li>
                </Link>
                <Link to="/curriculo">
                  <li class="nav-item">
                    <a class="nav-link" href="#curriculo" aria-label="curriculo">
                      <i class="bi bi-file-earmark me-2" aria-hidden="true"></i>
                      Currículo
                    </a>
                  </li>
                </Link>
                <Link to="/portifolio">
                  <li class="nav-item">
                    <a class="nav-link" href="#portfolio" aria-label="portfolio">
                      <i class="bi bi-collection me-2" aria-hidden="true"></i>
                      Portfólio
                    </a>
                  </li>
                </Link>
                <Link to="/contato">
                  <li class="nav-item">
                    <a class="nav-link" href="#contato" aria-label="contato">
                      <i class="bi bi-envelope me-2" aria-hidden="true"></i>
                      Contato
                    </a>
                  </li>
                </Link>
              </ul>
            </nav>
          </section>
        </aside>
        <Footer />
      </>
    );
  }
}

export default Aside;