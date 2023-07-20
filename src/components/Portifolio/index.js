import { Component } from "react";
import android from '../../images/android.png';
import cordel from '../../images/cordel.png';
import login from '../../images/login.png';
import pixel from '../../images/pixel.png';
import portifolio1 from '../../images/portifolio1.png';
import projetoPortifolio from '../../images/projetoPortifolio.png';
import shoppingCart from '../../images/shoppingCart.png';
import solarSystem from '../../images/solarSystem.png';
import trybewarts from '../../images/trybewarts.png';
import tryunfo from '../../images/tryunfo.png';
import trybeWallet from '../../images/trybeWallet.png';
import appReceitas from '../../images/appReceitas.png';
import Footer from "../Footer/Index";
import './Portifolio.css';

class PortifolioComponent extends Component  {
  render() {
    return (
      <>
       <section id="portfolio" className="mt-0 pt-3 pb-5">
        <div className="container pb-5 pt-0 mt-5" data-anime="left">
          <h2 className="pt-0 pb-3">
            <i className="bi bi-collection me-2" aria-hidden="true"></i>Portfólio
          </h2>
          <p className="pb-4">
            Confira alguns de meus melhores projetos até o momento abaixo:
          </p>
          <div
            id="carouselPortfolio"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselPortfolio"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselPortfolio"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselPortfolio"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselPortfolio"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner pb-4 mb-4">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-xl-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ projetoPortifolio }
                        className="card-img-top"
                        alt="Projeto Portfólio"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">Portfólio Online</h5>
                        <p className="card-text">
                          Um de meus projetos mais complexos, meu portfólio
                          pessoal onde tenho minhas habilidades e meus projetos
                          expostos, feito com React.js, Javascript e Bootstrap 5 .
                        </p>
                      </div>

                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/portifolio-online"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://portifolio-online-five.vercel.app/portifolio"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ trybeWallet }
                        className="card-img-top"
                        alt="TrybeWallet"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          TrybeWallet
                        </h5>
                        <p className="card-text">
                          Projeto de uma carteira digital com conversão de moedas estrangeiras.
                          Este projeto foi feito utilizando React.js, gerenciamento de estados e 
                          a estilização foi feita com auxilio de Material-UI.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/trybewallet"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://trybewallet-lime.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ appReceitas }
                        className="card-img-top"
                        alt="app de Receitas"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          App de Receitas
                        </h5>
                        <p className="card-text">
                          Projeto de um app de receitas provindas de uma API. Este app foi 
                          desenvolvido com React.js, utilizando de Context API para o gerenciamento de estados globais e Hooks.
                          É uma aplicação mobile com resolução (360 x 640).
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/receipes_app"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://receipes-app.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-xl-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ shoppingCart }
                        className="card-img-top"
                        alt="Shopping Cart"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Shopping Cart
                        </h5>
                        <p className="card-text">
                          Projeto de um E-commerce que faz uma requisição a uma API 
                          do mercado livre, utilizando javascript puro,
                          este projeto foi feito em grupo, onde nos deparamos com os 
                          possíveis conflitos de git.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/shopping-cart"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/shopping-cart/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ tryunfo } 
                        className="card-img-top"
                        alt="Tryunfo"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Tryunfo
                        </h5>
                        <p className="card-text">
                          Neste projeto, foram usados conceitos de Componentes e manipulação de Estados em React.
                          Através da manipulação de estados foi possível realizar o projeto proposto pela Trybe de criar um deck de jogo de trunfo, e posteriormente a ação de jogabilidade contra o computador.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/tryunfo"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/tryunfo/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ solarSystem }
                        className="card-img-top"
                        alt="Solar System"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Solar System
                        </h5>
                        <p className="card-text">
                          Neste projeto, tive meu primeiro contato com essa ferramenta tão 
                          importante e utilizada no mercado Front-End, o React.js.
                          Foram implementados os Componentes de forma organizada e reutilizável 
                          e o CSS foi replicado a partir do Figma disponibilizado no projeto.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/solar-system"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/solar-system/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-xl-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ portifolio1 }
                        className="card-img-top"
                        alt="Meu Primeiro Portifólio"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Meu Primeiro Portifólio
                        </h5>
                        <p className="card-text">
                          Primeiro portifólio criado, englobando grande parte dos conhecimentos 
                          adquiridos ao longo do curso do Professor Guanabara,  como: 
                          iFrames, Media-Query, responsividade, Formulários, entre outros. Utilizei 
                          também conceitos iniciais de JavaScript para criar um efeito de menu "hamburguer", 
                          aplicado à logo "GS".
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/gabriel-santos"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/gabriel-santos/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ pixel }
                        className="card-img-top"
                        alt="Pixels Art"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Pixels Art
                        </h5>
                        <p className="card-text">
                          Criado no curso da trybe onde pude consolidar os conhecimentos 
                          de HTML5, CSS3 e JS, aplicando funções, capturando elementos e 
                          trabalhando com LocalStorage.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/pixels-art"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/pixels-art/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ trybewarts }
                        className="card-img-top"
                        alt="TrybeWarts"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          TrybeWarts
                        </h5>
                        <p className="card-text">
                          Criado no curso da trybe onde pude consolidar os conhecimentos 
                          de formulários, Flexbox e utilizar bastante da biblioteca Bootstrap 
                          em meu CSS. E neste projeto onde foi desenvolvido em dupla, 
                          tive a oortuniade de lidar com conflitos de Git.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/trybewarts"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://trybewarts-nine.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-xl-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ login }
                        className="card-img-top"
                        alt="Projeto Login"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Projeto Login
                        </h5>
                        <p className="card-text">
                          Esse projeto é bem simples, porém foi um projeto
                          onde trabalhei com a responsividade em um formulário
                          para diferentes tamanhos de telas, e com efeito degradê.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/projeto-login"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/projeto-login/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ cordel }
                        className="card-img-top"
                        alt="Desafio Cordel"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Desafio Cordel
                        </h5>
                        <p className="card-text">
                          Projeto de um site criado em um curso de HTML5 e CSS3.  
                          Englobando conhecimentos como: Tornar o site responsivo; 
                          HTML semântico; paletas de cores, fontes e sombreamentos; 
                           e efeito Parallax em imagens.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/desafio-cordel"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/desafio-cordel/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ android }
                        className="card-img-top"
                        alt="Projeto Android"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Projeto Android
                        </h5>
                        <p className="card-text">
                          Projeto de um site criado em um curso de HTML5 e CSS3.  Englobando conhecimentos como: Tornar o site responsivo; HTML semântico; Trabalhar com listas, paletas de cores, fontes e sombreamentos; Trabalhar com margens, padding, bordas e links.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/projeto-android"
                          target="_blank"
                          aria-label="link repositorio"
                          className="btn btn-dark me-3" rel="noreferrer"
                          ><i className="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/projeto-android/"
                          target="_blank"
                          aria-label="link do site"
                          className="btn btn-primary" rel="noreferrer"
                          ><i className="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
      </>
    );
  }
}

export default PortifolioComponent;