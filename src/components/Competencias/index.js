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
import Footer from "../Footer/Index";

class CompetenciasComponent extends Component  {
    render() {
    return (
      <>
       <section id="competencias" className="mt-0">
        <div className="container pt-0 pb-5" data-anime="up">
          <h2 className="pt-5">
            <i className="bi bi-list-check me-2" aria-hidden="true"></i>Competências
          </h2>
          <p className="mb-5">
            Confira abaixo minhas competências pessoais (Soft Skills):
          </p>
          <div className="row mt-3 pt-2">
            <div className="col-md-6">
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ agil }
                  className="programmingIcon align-self-end me-2"
                  alt="agilidade"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Agilidade de aprendizagem
                </p>
              </div>
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ comunicacao }
                  className="programmingIcon align-self-end me-2"
                  alt="comunicacao"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Comunicação
                </p>
              </div>
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ proatividade }
                  className="programmingIcon align-self-end me-2"
                  alt="proatividade"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Proatividade
                </p>
              </div>
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ organizacao }
                  className="programmingIcon align-self-end me-2"
                  alt="organizacao"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Organização
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ analitica }
                  className="programmingIcon align-self-end me-2"
                  alt="capacidade analitica"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Capacidade análitica
                </p>
              </div>
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ flexibilidade }
                  className="programmingIcon align-self-end me-2"
                  alt="flexibilidade"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Flexibilidade
                </p>
              </div>
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ equipe }
                  className="programmingIcon align-self-end me-2"
                  alt="trabalho em equipe"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Trabalho em equipe
                </p>
              </div>
              <div className="d-flex mb-2 mt-2 compBox">
                <img
                  src={ comprometimento }
                  className="programmingIcon align-self-end me-2"
                  alt="comprometimento"
                />
                <p className="mb-0 align-self-center text-dark fw-semibold fs-5">
                  Comprometimento
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <Footer />
      </>
    );
  }
}

export default CompetenciasComponent;