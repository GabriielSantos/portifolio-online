import { Component } from "react";

class Portifolio extends Component {
  render () {
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
                        src="../static/img/portfolio.webp"
                        class="card-img-top"
                        alt="Projeto Portfólio"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">Portfólio Online</h5>
                        <p class="card-text">
                          Um de meus projetos mais complexos, meu portfólio
                          pessoal onde tenho minhas habilidades e meus projetos
                          expostos, feito no modelo MVC com python flask,
                          javascript e bootstrap 5 .
                        </p>
                      </div>

                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Meu-portfolio.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joaoherrera.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/stella.webp"
                        class="card-img-top"
                        alt="Loja de perfumes online"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Loja de perfumes on-line
                        </h5>
                        <p class="card-text">
                          Desenvolvi esse projeto totalmente responsivo com
                          bootstrap 5, utilizei esse projeto para aprimorar
                          minhas habilidades em bootstrap e responsividade web
                          utilizando o conceito "mobile-first".
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Stella-Scents.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Stella-Scents/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/form.webp"
                        class="card-img-top"
                        alt="Formulário de registro e login"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Formulário de registro e login
                        </h5>
                        <p class="card-text">
                          Desenvolvi esse projeto totalmente responsivo com
                          bootstrap 5, se trata de um formulário de login e
                          registro utilizando conceitos minimalistas e
                          ilustrações do unDraw.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Projeto-Form-Bootstrap.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Projeto-Form-Bootstrap/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
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
                        src="../static/img/art.webp"
                        class="card-img-top"
                        alt="Site de arte urbana"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Site de arte urbana
                        </h5>
                        <p class="card-text">
                          Meu primeiro projeto em bootstrap, onde comecei a me
                          familiarizar com o conceito de grid, aproveitei também
                          para fazer um modal de contato com o bootstrap.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Art.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Art/"
                          target="_blank"
                          class="btn btn-primary"
                          aria-label="link do site"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/chronos.webp"
                        class="card-img-top"
                        alt="Site de soluções técnologicas"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Site de soluções tecnológicas
                        </h5>
                        <p class="card-text">
                          Projeto desenvolvido como prova para a faculdade, no
                          qual utilizei HTML, CSS, JavaScript para realizar o
                          formulário, foi meu primeiro grande projeto e me
                          motivou bastante para continuar os estudos.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Chronos.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Chronos/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/calculadora.webp"
                        class="card-img-top"
                        alt="Calculadora animada"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Calculadora animada
                        </h5>
                        <p class="card-text">
                          Meu primeiro projeto utilizando javascript, fiz ele
                          com o auxílio de um video no youtube, com ela aprendi
                          sobre animações no css e cálculos em javascript,
                          utilizei o estilo Neumorphism.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Calculadora.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Calculadora/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
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
                        src="../static/img/pokedex.webp"
                        class="card-img-top"
                        alt="Pokédex usando PokeAPI"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Pokédex usando PokeAPI
                        </h5>
                        <p class="card-text">
                          Projeto feito em HTML, CSS e JavaScript, na onde
                          desenvolvi habilidades em consumo de API pelo método
                          fetch. Totalmente responsivo devido ao uso de medidas
                          que se adaptam ao font-size atual da página
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Pokedex-usando-PokeAPI.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Pokedex-usando-PokeAPI/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/mydevnotes.webp"
                        class="card-img-top"
                        alt="Bloco de notas online"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Bloco de notas online
                        </h5>
                        <p class="card-text">
                          Projeto desenvolvido com bootstrap, e javascript, onde
                          pude aprimorar minhas habilidades em javascript
                          utilizando o mesmo para criar notas, editar, deletar e
                          até mesmo clonar, utilizei também o salvamento do JSON
                          em local storage.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/My-DevNotes-clone-google-keep.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/My-DevNotes-clone-google-keep/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/seguranca.webp"
                        class="card-img-top"
                        alt="Segurança virtual"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Segurança virtual
                        </h5>
                        <p class="card-text">
                          Esse projeto é bem simples, porém foi meu primeiro
                          projeto em javascript onde realizo uma validação do
                          texto digitado e faço a varredura da array. Nomes
                          permitidos: Marcelo, Amanda, Sabrina, Rafael...
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/Seguran-a-virtual.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://joao-gabriel-herrera.github.io/Seguran-a-virtual/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
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
                        src="../static/img/ClimaAki.webp"
                        class="card-img-top"
                        alt="Aplicação de previsão de tempo"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          ClimaAki - OpenWeather API
                        </h5>
                        <p class="card-text">
                          Projeto feito em HTML, CSS e JavaScript, onde executei
                          o consumo da API OpenWeather para dados sobre clima
                          com background dinâmico pelo Unsplash.Totalmente
                          responsivo.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/ClimaAki.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://climaaki.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/DevPiano.webp"
                        class="card-img-top"
                        alt="Piano Online"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          DevPiano - piano online
                        </h5>
                        <p class="card-text">
                          Projeto desenvolvido com HTML CSS e JavaScript no qual
                          desenvolvi habilidades no quesito de manipulação de
                          áudio e funções em JavaScript.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://github.com/joao-gabriel-herrera/DevPiano.git"
                          target="_blank"
                          aria-label="link repositorio"
                          class="btn btn-dark me-3"
                          ><i class="bi bi-github"></i
                        ></a>
                        <a
                          href="https://dev-piano.vercel.app/"
                          target="_blank"
                          aria-label="link do site"
                          class="btn btn-primary"
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

export default Portifolio;