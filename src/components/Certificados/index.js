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
import Footer from "../Footer/Index";
class CertificadosCompoent extends Component  {
  render() {
    return (
      <>
       <section id="certificados" className="mt-0 pt-0" >
        <div className="container pb-5 pt-5" data-anime="left">
          <h2 className="pt-0 pb-2">
            <i className="bi bi-patch-check me-2" aria-hidden="true"></i
            >Certificados
          </h2>
          <p className="pb-4">
            Confira abaixo os certificados que conquistei até o momento:
          </p>
          <div
            id="carouselCertificados"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselCertificados"
                data-bs-slide-to="0"
                className="active"
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
            <div className="carousel-inner pb-4 mb-5">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-xl-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ fundamentos } 
                        className="card-img-top"
                        alt="Certificado Fundamentos"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">Fundamentos do Desenvolvimento Web</h5>
                        <p className="card-text">
                          JavaScript · Git · GitHub · CSS · HTML5 · HTML semântico · Jest · Unix
                        </p>
                      </div>

                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIphMtKSfIruNQUAtrXyw?e=gzIUly"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado fundamentos frontend" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ introducaoJs }
                        className="card-img-top"
                        alt="Certificado Introdução JS"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Introdução Javascript
                        </h5>
                        <p className="card-text">
                          Por meio deste curso tive meu primeiro contato com essa lingaugem fantástica chamada Javascript.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpg-YySrqbWOKCPcpnJg?e=9aMKmP"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Introdução JS" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100" id="cardtest">
                      <img
                        src={ trabVolunt }
                        className="card-img-top"
                        alt="Certificado Gcloud"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Trabalho Voluntário
                        </h5>
                        <p className="card-text">
                          Projeto voluntário "BOTA PRA FAZER - UNIFEI 2019" onde 
                          proporcionamos um dia de lazer e diversão aos integrantes da casa de
                          apoio para moradores de rua da cidade de Itajubá/MG.                         
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/i/s!AiNIj7dgQIIpgY0j_UgP1w9g_niXbg?e=AA5bgG"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Trabalho Voluntário" rel="noreferrer"
                        ><i className="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.youtube.com/watch?v=y4hgZXASBTk&ab_channel=UNIAMOR"
                          target="_blank"
                          aria-label="Video UNIAMOR"
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
                        src={ git }
                        className="card-img-top"
                        alt="Certificado introudução ao git/github"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Git & Github
                        </h5>
                        <p className="card-text">
                          Por meio deste curso iniciei meus conhecimentos em git, 
                          aprendi a realizar o versionamento de código e sua devida 
                          manipulação, e a hospedagem e utilização do Github.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgcFySw_kbXHotLHPvA?e=zahqqR"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado git pdf" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ html4 }
                        className="card-img-top"
                        alt="Certificado HTML5 e CSS3"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">HTML5 e CSS3 - Módulo 4</h5>
                        <p className="card-text">
                          Neste módulo aprendi conteúdos como iframes, formulários,
                          Media Queries e responsividade "Mobile First".
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIphMwWgSStTcjayzQ4uQ?e=JSB8a4"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 4" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ html3 }
                        className="card-img-top"
                        alt="Certificado HTML5 e CSS3"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          HTML5 e CSS3 - Módulo 3
                        </h5>
                        <p className="card-text">
                          Neste módulo aprendi conteúdos como backgrounds, shorthands e 
                          hospedagens de projetos.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpg9x9INtB7l8PSyM6Gw?e=RM0YdR"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 3" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
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
                        src={ html2 }
                        className="card-img-top"
                        alt="Certificado HTML5 e CSS3"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          HTML5 e CSS3 - Módulo 2
                        </h5>
                        <p className="card-text">
                          Neste módulo aprendi conteúdos como responsividade, Wireframes, 
                          paleta de cores, tipografias, fontes, flexbox, sombras e bordas.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgpsxLvNhv7RI0txnsQ?e=tXf85C"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 2" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ html1 }
                        className="card-img-top"
                        alt="Pull request git github"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">HTML5 e CSS3 - Módulo 1</h5>
                        <p className="card-text">
                          Neste módulo aprendi conteúdos como HTML semântico, 
                          ícones, listas, links, inserir imagens, audios e videos
                          e dei o primeiro passo em CSS.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgbl1CliKGZEE08xTRA?e=JIdhWQ"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado HTML5 e CSS3 - 1" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ algoritmos }
                        className="card-img-top"
                        alt="Algoritmos"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Algoritmos
                        </h5>
                        <p className="card-text">
                          Por meio deste curso aprendi sobre os conceitos básicos sobre Algoritmos
                          e Estrutura de Dados.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgcFxg9i2m8e4-aggVg?e=zUBRj3"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Algoritmos" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
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
                        src={ gerenciamento }
                        className="card-img-top"
                        alt="Certificado Gerenciamento Projetos"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Fundamentos do Gerenciamento de Projetos
                        </h5>
                        <p className="card-text">
                          Por meio deste curso aprendi estratégias para um melhor 
                          gerenciamento de um projeto.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpiHB9iw6p9UQMZorg?e=Rlk18r"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Gerenciamento Projetos" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ analiseProb }
                        className="card-img-top"
                        alt="Analise Problemas e Tomada Decisão"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">Análises de Problemas e Tomada de Decisão</h5>
                        <p className="card-text">
                          Neste curso aprendi estratégias para análisar problemas e tomar a melhor decisão.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpiG9KWLqqCAK3DUDY?e=ZagoUO"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Analise de Problemas e Tomada de Decisão" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={ greenBelt }
                        className="card-img-top"
                        alt="Green Belt"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          Green Belt Lean Six Sigma
                        </h5>
                        <p className="card-text">
                          Por meio deste curso aprendi sobre os conceitos de variabilidade 
                          e a aplicação de melhoria contínua em processos.
                        </p>
                      </div>
                      <div className="siteIcons">
                        <a
                          href="https://1drv.ms/b/s!AiNIj7dgQIIpgZsI8CeLKQ1Udu4GIA?e=YiWhml"
                          className="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado Green Belt" rel="noreferrer"
                          ><i className="bi bi-filetype-pdf"></i
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
              data-bs-target="#carouselCertificados"
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
              data-bs-target="#carouselCertificados"
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

export default CertificadosCompoent;