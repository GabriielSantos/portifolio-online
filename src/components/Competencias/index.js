import { Component } from "react";
import agil from '../../images/agil.png';
import analitica from '../../images/analitica.svg';
import comprometimento from '../../images/comprometimento.svg';
import comunicacao from '../../images/comunicacao.svg';
import equipe from '../../images/equipe.svg';
import flexibilidade from '../../images/flexibilidade.svg';
import organizacao from '../../images/organizacao.svg';
import proatividade from '../../images/proatividade.svg';
import './Competencias.css';

class CompetenciasComponent extends Component  {
    render() {
    return (
       <section id="competencias" class="mt-5 section-bg">
        <div class="container pb-5" data-anime="up">
          <h2 class="pt-5">
            <i class="bi bi-list-check me-2" aria-hidden="true"></i>Competências
          </h2>
          <p class="mb-5">
            Confira abaixo minhas competências pessoais (Soft Skills):
          </p>
          <div class="row mt-3">
            <div class="col-md-6">
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ agil }
                  class="programmingIcon align-self-end me-2"
                  alt="agilidade"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Agilidade de aprendizagem
                </p>
              </div>
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ comunicacao }
                  class="programmingIcon align-self-end me-2"
                  alt="comunicacao"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Comunicação
                </p>
              </div>
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ proatividade }
                  class="programmingIcon align-self-end me-2"
                  alt="proatividade"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Proatividade
                </p>
              </div>
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ organizacao }
                  class="programmingIcon align-self-end me-2"
                  alt="organizacao"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Organização
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ analitica }
                  class="programmingIcon align-self-end me-2"
                  alt="capacidade analitica"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Capacidade análitica
                </p>
              </div>
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ flexibilidade }
                  class="programmingIcon align-self-end me-2"
                  alt="flexibilidade"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Flexibilidade
                </p>
              </div>
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ equipe }
                  class="programmingIcon align-self-end me-2"
                  alt="trabalho em equipe"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Trabalho em equipe
                </p>
              </div>
              <div class="d-flex mb-2 mt-2 compBox">
                <img
                  src={ comprometimento }
                  class="programmingIcon align-self-end me-2"
                  alt="comprometimento"
                />
                <p class="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Comprometimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompetenciasComponent;