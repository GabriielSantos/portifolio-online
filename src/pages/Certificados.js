import { Component } from "react";

class Certificados extends Component {
  render () {
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
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row row-cols-1 row-cols-xl-3 g-4">
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/bootstrap.webp"
                        class="card-img-top"
                        alt="Certificado Bootstrap"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">Bootstrap 5</h5>
                        <p class="card-text">
                          Por meio deste curso obtive meus conhecimentos em
                          bootstrap 5, tais como: modelo de grid (containers,
                          rows e cols), bootstrap utilities, responsividade web
                          entre outros...
                        </p>
                      </div>

                      <div class="siteIcons">
                        <a
                          href="https://fatecspgov-my.sharepoint.com/:b:/g/personal/joao_herrera_fatec_sp_gov_br/EaFpHdmzkSxBjX95d1wow9gBzfV-TdFuFmJnItjA9vhXHw?e=9m8d59"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado bootstrap pdf"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.udemy.com/course/bootstrap-5-do-basico-ao-avancado-com-4-projetos/"
                          target="_blank"
                          aria-label="Certificado bootstrap fonte"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/freecodecamp.webp"
                        class="card-img-top"
                        alt="Certificado freecodecamp"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Responsividade Web
                        </h5>
                        <p class="card-text">
                          Por meio deste curso aprimorei minhas práticas de
                          responsividade web, sempre respeitando o princípio
                          "mobile-first".
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://fatecspgov-my.sharepoint.com/:b:/g/personal/joao_herrera_fatec_sp_gov_br/EUx-GSgXm_BAvJ0yBpmzwu4BejuiAp99hiO6vVXUuSQojw?e=IH8uaC"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado responsividade pdf"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
                          target="_blank"
                          aria-label="Certificado responsividade fonte"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100" id="cardtest">
                      <img
                        src="../static/img/gcloud.webp"
                        class="card-img-top"
                        alt="Certificado Gcloud"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Serviços em nuvem (Gcloud)
                        </h5>
                        <p class="card-text">
                          Por meio deste curso obtive minha base de
                          conhecimentos em nuvem utilizando a plataforma do
                          Gcloud.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://fatecspgov-my.sharepoint.com/:b:/g/personal/joao_herrera_fatec_sp_gov_br/EUwrJDUvFzRAoz4j5bqlHzgBzHsnV3Kx6imsVwaQsYnuQQ?e=ccgXON"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado gcloud pdf"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.cloudskillsboost.google/public_profiles/af822390-667b-4624-97cf-f21329c07979"
                          target="_blank"
                          aria-label="Certificado gcloud fonte"
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
                        src="../static/img/git.webp"
                        class="card-img-top"
                        alt="Certificado introudução ao git/github"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Introdução ao Git
                        </h5>
                        <p class="card-text">
                          Por meio deste curso iniciei meus conhecimentos em
                          git, aprendi a realizar o versionamento de código e
                          sua devida manipulação.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://fatecspgov-my.sharepoint.com/:b:/g/personal/joao_herrera_fatec_sp_gov_br/EdYrCcorh8JLsM8xPMJJD-sBSodec8NFf09M5OyMsRj6EQ?e=iy8Tf8"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado git pdf"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.dio.me/"
                          target="_blank"
                          aria-label="Certificado git fonte"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/pullrequest.webp"
                        class="card-img-top"
                        alt="Pull request git github"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">Pull request Git</h5>
                        <p class="card-text">
                          Por meio deste curso aprendi os conceitos de pull
                          request e seu devido uso na plataforma.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://fatecspgov-my.sharepoint.com/:b:/g/personal/joao_herrera_fatec_sp_gov_br/EYD9u8cis2ZJgxJ1qAqh9FQBGy08ERdTHLW-SFz3u7poFg?e=xFsm3w"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado git pdf"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.dio.me/"
                          target="_blank"
                          aria-label="Certificado git fonte"
                          class="btn btn-primary"
                          ><i class="bi bi-link-45deg"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src="../static/img/branches.webp"
                        class="card-img-top"
                        alt="Branches Git"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-center">
                          Trabalhando com Branches Github
                        </h5>
                        <p class="card-text">
                          Por meio deste curso aprendi a manipular branches no
                          github e a utilizar suas funcionalidades.
                        </p>
                      </div>
                      <div class="siteIcons">
                        <a
                          href="https://fatecspgov-my.sharepoint.com/:b:/g/personal/joao_herrera_fatec_sp_gov_br/EYALu1ZO2hRPsCstDxvPQlUBSmk_uQepnSRWeidZItWb6Q?e=7ysyQX"
                          class="btn btn-success me-3"
                          target="_blank"
                          aria-label="Certificado git pdf"
                          ><i class="bi bi-filetype-pdf"></i
                        ></a>
                        <a
                          href="https://www.dio.me/"
                          target="_blank"
                          aria-label="Certificado git fonte"
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

export default Certificados;