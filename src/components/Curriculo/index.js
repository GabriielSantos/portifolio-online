import { Component } from "react";
import './Curriculo.css';

class CurriculoComponent extends Component  {
  render() {
    return (
       <section id="curriculo" class="cv mt-5 section-bg">
        <div class="container pb-5">
          <h2 class="pt-3 pb-4">
            <i class="bi bi-file-earmark me-2" aria-hidden="true"></i>Currículo
          </h2>
          <div class="row">
            <div class="col-md-6">
              <h3 class="cv-title">Educação</h3>
              <div class="cv-item" data-anime="up">
                <h4>DESENVOLVIMENTO WEB FULL STACK</h4>
                <h5>2023-2024</h5>
                <p><em>Trybe</em></p>
                <p>
                  Curso de desenvolvimento web voltado para atender as necessidades do mercado de trabalho.
                  Possui 4 módulos, totalizando 1500 horas de conteúdo que ensinam desde fundamentos até
                  ciência da computação, formando profissionais Full Stack. Além de aprimorar o desenvolvimento
                  de Soft Skills.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>ENGENHARIA CIVIL</h4>
                <h5>2016-2021</h5>
                <p><em>Centro Universitário de Itajubá - FEPI</em></p>
                <p>
                  Curso bacharelado na área de Engenharia Civil.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>TÉCNICO EM MECATRÔNICA</h4>
                <h5>2013-2014</h5>
                <p><em>Colégio de Itajubá</em></p>
                <p>
                  Curso técnico na área de Mecatrônica.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="cv-title">Profissional</h3>
              <div class="cv-item" data-anime="up">
                <h4>DESENVOLVEDOR FRONT END</h4>
                <h5>Mai / 2023 – Atualmente</h5>
                <p><em>Freelance</em></p>
                <p>
                  Desenvolvimento de aplicações Web Front-End responsivas utilizando 
                  Javascript, React.js, HTML, CSS, Bootstrap, e outras diversas bibliotecas 
                  e frameworks mediante necessidade.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>ASSISTENTE ADM. | COMPRADOR </h4>
                <h5>Set / 2021 – Jan / 2023</h5>
                <p><em>Tekno Sistemas de Engenharia LTDA</em></p>
                <p>Medições | Orçamentos | Compras | Controle de Funcionários | Admissões e Rescisões
                  | Controle de Almoxarifado | Controle de Estoque | Delegação de Serviços | Fiscalização de Serviços.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>ESTAGIÁRIO ENGENHARIA CIVIL</h4>
                <h5>Ago / 2020 - Ago / 2021</h5>
                <p><em>DAC Engenharia</em></p>
                <p>Reformas | Implementações | Orçamentos | Projetos 3D | Projetos arquitetônicos | 
                  Projetos hidráulicos | Projetos elétricos | Projetos combate a incêndio e pânico | 
                  Sistema de proteção contra descargas atmosféricas | Desenvolvimento de relatórios técnicos | 
                  Levantamentos topográficos | Elaboração de superfícies | Liderança e Trabalho em equipe.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>ATENDIMENTO AO CLIENTE</h4>
                <h5>Abr / 2018 - Mar / 2020</h5>
                <p><em>The Gustta Gastronomia LTDA</em></p>
                <p>Preparo e montagem de lanches quentes, pratos rápidos e porções em geral | 
                  Organização do local de trabalho, utensílios e geladeiras.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>ATENDIMENTO AO CLIENTE</h4>
                <h5>Set / 2012 - Abr / 2014</h5>
                <p><em>Centrocópia</em></p>
                <p>Execução de serviços de fotocópias | Xerox | Plotagens | Encadernações | Digitalização de fotos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CurriculoComponent;