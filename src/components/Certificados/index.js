import { Component } from "react";
import algoritmos from '../../images/algoritmos.png';
import analiseProb from '../../images/analiseProblemas.png';
import fundamentos from '../../images/fundamentos.png';
import gerenciamento from '../../images/gerenciamento.png';
import git from '../../images/git-github.png';
import greenBelt from '../../images/greenBelt.png';
import html1 from '../../images/html1.png';
import html2 from '../../images/html2.png';
import html3 from '../../images/html3.png';
import html4 from '../../images/html4.png';
import introducaoJs from '../../images/introducaoJs.png';
import trabVolunt from '../../images/trabVoluntario.png';
import './Certificados.css';

class CertificadosCompoent extends Component  {
  render() {
    return (
       <section id="certificados" class="mt-5">
        <div class="container pb-5 pt-5" data-anime="left">
          <h2>
            <i class="bi bi-patch-check me-2" aria-hidden="true"></i
            >Certificados
          </h2>
          <p class="pb-4">
            Confira abaixo os certificados que conquistei até o momento:
          </p>
          <div
            id="carouselCertificados"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselCertificados"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselCertificados"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselCertificados"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselCertificados"
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
                        src={ fundamentos } 
                        class="card-img-top"
                        alt="Certificado Fundamentos"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">Fundamentos do Desenvolvimento Web</h5>
                        <p class="card-text">
                          JavaScript · Git · GitHub · CSS · HTML5 · HTML semântico · Jest · Unix
                        </p>
                      </div>

                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIphMtKSfIruNQUAtrXyw?e=gzIUly"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado fundamentos frontend" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ introducaoJs }
                        class="card-img-top"
                        alt="Certificado Introdução JS"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Introdução Javascript
                        </h5>
                        <p class="card-text">
                          Por meio deste curso tive meu primeiro contato com essa lingaugem fantástica chamada Javascript.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpg-YySrqbWOKCPcpnJg?e=9aMKmP"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Introdução JS" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100" id="cardtest">
                      <img
                        src={ trabVolunt }
                        class="card-img-top"
                        alt="Certificado Gcloud"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Trabalho Voluntário
                        </h5>
                        <p class="card-text">
                          Projeto voluntário "BOTA PRA FAZER - UNIFEI 2019" onde 
                          proporcionamos um dia de lazer e diversão aos integrantes da casa de
                          apoio para moradores de rua da cidade de Itajubá/MG.                         
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/i/s!AiNIj7dgQIIpgY0j_UgP1w9g_niXbg?e=AA5bgG"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Trabalho Voluntário" rel="noreferrer"
                        ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.youtube.com/watch?v=y4hgZXASBTk&ab_channel=UNIAMOR"
                          target="_blank"
                          aria-label="Video UNIAMOR"
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
                        src={ git }
                        class="card-img-top"
                        alt="Certificado introudução ao git/github"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Git & Github
                        </h5>
                        <p class="card-text">
                          Por meio deste curso iniciei meus conhecimentos em git, 
                          aprendi a realizar o versionamento de código e sua devida 
                          manipulação, e a hospedagem e utilização do Github.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgcFySw_kbXHotLHPvA?e=zahqqR"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado git pdf" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ html4 }
                        class="card-img-top"
                        alt="Certificado HTML5 e CSS3"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">HTML5 e CSS3 - Módulo 4</h5>
                        <p class="card-text">
                          Neste módulo aprendi conteúdos como iframes, formulários,
                          Media Queries e responsividade "Mobile First".
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIphMwWgSStTcjayzQ4uQ?e=JSB8a4"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 4" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ html3 }
                        class="card-img-top"
                        alt="Certificado HTML5 e CSS3"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          HTML5 e CSS3 - Módulo 3
                        </h5>
                        <p class="card-text">
                          Neste módulo aprendi conteúdos como backgrounds, shorthands e 
                          hospedagens de projetos.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpg9x9INtB7l8PSyM6Gw?e=RM0YdR"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 3" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
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
                        src={ html2 }
                        class="card-img-top"
                        alt="Certificado HTML5 e CSS3"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          HTML5 e CSS3 - Módulo 2
                        </h5>
                        <p class="card-text">
                          Neste módulo aprendi conteúdos como responsividade, Wireframes, 
                          paleta de cores, tipografias, fontes, flexbox, sombras e bordas.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgpsxLvNhv7RI0txnsQ?e=tXf85C"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 2" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ html1 }
                        class="card-img-top"
                        alt="Pull request git github"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">HTML5 e CSS3 - Módulo 1</h5>
                        <p class="card-text">
                          Neste módulo aprendi conteúdos como HTML semântico, 
                          ícones, listas, links, inserir imagens, audios e videos
                          e dei o primeiro passo em CSS.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgbl1CliKGZEE08xTRA?e=JIdhWQ"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 1" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ algoritmos }
                        class="card-img-top"
                        alt="Algoritmos"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Algoritmos
                        </h5>
                        <p class="card-text">
                          Por meio deste curso aprendi sobre os conceitos básicos sobre Algoritmos
                          e Estrutura de Dados.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgcFxg9i2m8e4-aggVg?e=zUBRj3"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Algoritmos" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
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
                        src={ gerenciamento }
                        class="card-img-top"
                        alt="Certificado Gerenciamento Projetos"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Fundamentos do Gerenciamento de Projetos
                        </h5>
                        <p class="card-text">
                          Por meio deste curso aprendi estratégias para um melhor 
                          gerenciamento de um projeto.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpiHB9iw6p9UQMZorg?e=Rlk18r"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Gerenciamento Projetos" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ analiseProb }
                        class="card-img-top"
                        alt="Analise Problemas e Tomada Decisão"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">Análises de Problemas e Tomada de Decisão</h5>
                        <p class="card-text">
                          Neste curso aprendi estratégias para análisar problemas e tomar a melhor decisão.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpiG9KWLqqCAK3DUDY?e=ZagoUO"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Analise de Problemas e Tomada de Decisão" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={ greenBelt }
                        class="card-img-top"
                        alt="Green Belt"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Green Belt Lean Six Sigma
                        </h5>
                        <p class="card-text">
                          Por meio deste curso aprendi sobre os conceitos de variabilidade 
                          e a aplicação de melhoria contínua em processos.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgZsI8CeLKQ1Udu4GIA?e=YiWhml"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Green Belt" rel="noreferrer"
                          ><i class="bi bi-filetype-pdf"></i
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
              data-bs-target="#carouselCertificados"
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
              data-bs-target="#carouselCertificados"
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

export default CertificadosCompoent;