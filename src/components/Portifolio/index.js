import { Component } from "react";
import android from '../../images/android.png';
import construcao from '../../images/construcao.png';
import cordel from '../../images/cordel.png';
import login from '../../images/login.png';
import pixel from '../../images/pixel.png';
import portifolio1 from '../../images/portifolio1.png';
import projetoPortifolio from '../../images/projetoPortifolio.png';
import shoppingCart from '../../images/shoppingCart.png';
import solarSystem from '../../images/solarSystem.png';
import trybewarts from '../../images/trybewarts.png';
import tryunfo from '../../images/tryunfo.png';
import './Portifolio.css';

class PortifolioComponent extends Component  {
  render() {
    return (
       <section id="portfolio" class="mt-5">
        <div class="container pb-5 pt-5" data-anime="left">
          <h2>
            <i class="bi bi-collection me-2" aria-hidden="true"></i>Portfólio
          </h2>
          <p class="pb-4">
            Confira alguns de meus melhores projetos até o momento abaixo:
          </p>
          <div
            id="carouselPortfolio"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselPortfolio"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row row-cols-1 row-cols-xl-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ projetoPortifolio }
                        class="card-img-top"
                        alt="Projeto Portfólio"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">Portfólio Online</h5>
                        <p class="card-text">
                          Um de meus projetos mais complexos, meu portfólio
                          pessoal onde tenho minhas habilidades e meus projetos
                          expostos, feito com React.js, Javascript e Bootstrap 5 .
                        </p>
                      </div>

                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/portifolio-online"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://portifolio-online-five.vercel.app/portifolio"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ construcao }
                        class="card-img-top"
                        alt="TrybeWallet"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          TrybeWallet
                        </h5>
                        <p class="card-text">
                          CSS EM CONSTRUÇÃO
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/trybewallet"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href=""
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ construcao }
                        class="card-img-top"
                        alt="TrybeTunes"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          TrybeTunes
                        </h5>
                        <p class="card-text">
                          CSS EM CONSTRUÇÃO
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/trybetunes"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href=""
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <div class="row row-cols-1 row-cols-xl-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ shoppingCart }
                        class="card-img-top"
                        alt="Shopping Cart"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Shopping Cart
                        </h5>
                        <p class="card-text">
                          Projeto de um E-commerce que faz uma requisição a uma API 
                          do mercado livre, utilizando javascript puro,
                          este projeto foi feito em grupo, onde nos deparamos com os 
                          possíveis conflitos de git.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/shopping-cart"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/shopping-cart/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ tryunfo } 
                        class="card-img-top"
                        alt="Tryunfo"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Tryunfo
                        </h5>
                        <p class="card-text">
                          Neste projeto, foram usados conceitos de Componentes e manipulação de Estados em React.
                          Através da manipulação de estados foi possível realizar o projeto proposto pela Trybe de criar um deck de jogo de trunfo, e posteriormente a ação de jogabilidade contra o computador.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/tryunfo"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/tryunfo/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ solarSystem }
                        class="card-img-top"
                        alt="Solar System"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Solar System
                        </h5>
                        <p class="card-text">
                          Neste projeto, tive meu primeiro contato com essa ferramenta tão 
                          importante e utilizada no mercado Front-End, o React.js.
                          Foram implementados os Componentes de forma organizada e reutilizável 
                          e o CSS foi replicado a partir do Figma disponibilizado no projeto.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/solar-system"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/solar-system/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <div class="row row-cols-1 row-cols-xl-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ portifolio1 }
                        class="card-img-top"
                        alt="Meu Primeiro Portifólio"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Meu Primeiro Portifólio
                        </h5>
                        <p class="card-text">
                          Primeiro portifólio criado, englobando grande parte dos conhecimentos 
                          adquiridos ao longo do curso do Professor Guanabara,  como: 
                          iFrames, Media-Query, responsividade, Formulários, entre outros. Utilizei 
                          também conceitos iniciais de JavaScript para criar um efeito de menu "hamburguer", 
                          aplicado à logo "GS".
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/gabriel-santos"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/gabriel-santos/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ pixel }
                        class="card-img-top"
                        alt="Pixels Art"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Pixels Art
                        </h5>
                        <p class="card-text">
                          Criado no curso da trybe onde pude consolidar os conhecimentos 
                          de HTML5, CSS3 e JS, aplicando funções, capturando elementos e 
                          trabalhando com LocalStorage.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/pixels-art"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/pixels-art/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ trybewarts }
                        class="card-img-top"
                        alt="TrybeWarts"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          TrybeWarts
                        </h5>
                        <p class="card-text">
                          Criado no curso da trybe onde pude consolidar os conhecimentos 
                          de formulários, Flexbox e utilizar bastante da biblioteca Bootstrap 
                          em meu CSS. E neste projeto onde foi desenvolvido em dupla, 
                          tive a oortuniade de lidar com conflitos de Git.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/trybewarts"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://trybewarts-nine.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="10000">
                <div class="row row-cols-1 row-cols-xl-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ login }
                        class="card-img-top"
                        alt="Projeto Login"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Projeto Login
                        </h5>
                        <p class="card-text">
                          Esse projeto é bem simples, porém foi um projeto
                          onde trabalhei com a responsividade em um formulário
                          para diferentes tamanhos de telas, e com efeito degradê.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/projeto-login"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/projeto-login/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ cordel }
                        class="card-img-top"
                        alt="Desafio Cordel"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Desafio Cordel
                        </h5>
                        <p class="card-text">
                          Projeto de um site criado em um curso de HTML5 e CSS3.  
                          Englobando conhecimentos como: Tornar o site responsivo; 
                          HTML semântico; paletas de cores, fontes e sombreamentos; 
                           e efeito Parallax em imagens.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/desafio-cordel"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/desafio-cordel/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ android }
                        class="card-img-top"
                        alt="Projeto Android"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Projeto Android
                        </h5>
                        <p class="card-text">
                          Projeto de um site criado em um curso de HTML5 e CSS3.  Englobando conhecimentos como: Tornar o site responsivo; HTML semântico; Trabalhar com listas, paletas de cores, fontes e sombreamentos; Trabalhar com margens, padding, bordas e links.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/GabriielSantos/projeto-android"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3" rel="noreferrer"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://gabriielsantos.github.io/projeto-android/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary" rel="noreferrer"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselPortfolio"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default PortifolioComponent;