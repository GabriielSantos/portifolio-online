/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import bootstrap from '../../images/bootstrap.svg';
import css3 from '../../images/css3.svg';
import eslint from '../../images/eslint.svg';
import figma from '../../images/figma.svg';
import git from '../../images/git.svg';
import github from '../../images/github.svg';
import html from '../../images/html5.svg';
import javascript from '../../images/javascript.svg';
import jest from '../../images/jest.svg';
import nodejs from '../../images/nodejs.svg';
import image from '../../images/perfil.jpeg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import rtl from '../../images/rtl.png';
import trello from '../../images/trello.svg';
import './Sobre.css';

class SobreComponent extends Component {
  render() {
    return (
      <section id="sobre" className="container mt-5">
        <div className="row w-100">
          <div className="col-md-12" data-anime="down">
            <h2>
              <i className="bi bi-person me-2" aria-hidden="true" />
              Sobre
            </h2>
            <p>
              Primeiramente, boas vindas ao meu site, fiz este site com muito
              apreço a você que esta visitando! Desejo a você uma ótima estadia,
              e qualquer dúvida me encontro a disposição! Bom, vamos lá,
              Sou Engenheiro Civil por formação, e foi durante a graduação que tive
              meu primeiro contato com tecnologia, o que fez meus olhos brilharem.
              Concluí a graduação, porém decidi migrar para área de Desenvolvimento,
              e motivado por isso, hoje estou em busca de minha primeira
              oportunidade como Dev. Atualmente curso a Trybe, um curso
              que forma Desenvolvedores Web Full Stack Júniores, prontos para atuarem
              no mercado. Sou uma pessoa que aprende muito rápido tudo que me é ensinado
              e que tem uma insáciavel busca por conhecimento!
            </p>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-7 col-xl-4">
            <img
              className="img-fluid mb-3 fotoPerfil"
              src={ image }
              alt="Foto do Gabriel"
              data-anime="left"
            />
          </div>
          <div className="col-12 col-xl-8" data-anime="up">
            <h3 className="mt-3 mt-xl-0 mb-3">Desenvolvedor Front-end</h3>
            <p>
              Sou um desenvolvedor web front-end júnior apaixonado por transformar ideias 
              em experiências interativas na web.
              Estou em busca de oportunidades desafiadoras para crescer e aprimorar minhas habilidades. Se você procura um desenvolvedor apaixonado por entregar soluções excelentes, estou pronto para colaborar em projetos impactantes. Vamos criar experiências web memoráveis juntos!
            </p>
            <h4 className="mb-2">Tecnologias</h4>
            <p className="mt-2 mb-4">
              Confira abaixo minhas habilidades em programação (Hard Skills):
            </p>
            <div className="d-flex mt-3 mb-5">
              <img
                src={ react }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="React.js"
                title="React.js"
              />
              <img
                src={ javascript }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="javascript"
                title="Javascript"
              />
              <img
                src={ html }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="html"
                title="HTML 5"
              />
              <img
                src={ css3 }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="css3"
                title="CSS 3"
              />
              <img
                src={ bootstrap }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="bootstrap"
                title="Bootstrap"
              />
              <img
                src={ jest }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="jest"
                title="Jest"
              />
              <span className="bg-white rounded-2 me-md-3 me-2">
                <img
                  src={ rtl }
                  className="programmingIcon align-self-end"
                  alt="rtl"
                  title="RTL"
                />
              </span>
              <img
                src={ redux }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="redux"
                title="Redux"
              />
              <img
                src={ eslint }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="eslint"
                title="EsLint"
              />
              <img
                src={ git }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="git"
                title="GIT"
              />
              <img
                src={ github }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="github"
                title="Github"
              />
              <img
                src={ figma }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="figma"
                title="Figma"
              />
              <img
                src={ trello }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="trello"
                title="Trello"
              />
              <img
                src={ nodejs }
                className="programmingIcon align-self-end me-md-3 me-2"
                alt="nodejs"
                title="Nodejs"
              />
            </div>
            <h4>Perfil</h4>
            <div className="row mt-3 mb-3">
              <div className="col-md-6">
                <ul className="fs-5">
                  <li className="li-style">
                    Nome:
                    <span className="fw-lighter ms-1">
                      Gabriel Augusto da Costa Santos
                    </span
                    >
                  </li>
                  <li className="li-style">
                    Idade:
                    <span className="fw-lighter ms-2">27 Anos</span>
                  </li>
                  <li className="li-style">
                    Cidade:
                    <span
                      className="fw-lighter ms-2"
                    >
                      São Paulo
                    </span
                    >
                  </li>
                  <li className="li-style">
                    Estado:
                    <span className="fw-lighter ms-2">SP</span>
                  </li>
                  <li className="li-style">
                    Inglês:
                    <span className="fw-lighter ms-1"> Intermediário</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="fs-5">
                  <li className="li-style">
                    Hobby:
                    <span
                      className="fw-lighter ms-2"
                    >
                      Viajar, Games, Academia, Muay Thai, Cinema...
                    </span
                    >
                  </li>
                  <li className="li-style">
                    Formação Acadêmica:
                    <span
                      className="fw-lighter ms-2"
                    >
                      Engenheiro Civil
                    </span
                    >
                  </li>
                  <li className="li-style">
                    Cargo atual:
                    <span className="fw-lighter ms-2">Estudante</span>
                  </li>
                  <li className="li-style">
                    Experência em TI:
                    <span className="fw-lighter ms-2">1 ano</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SobreComponent;
