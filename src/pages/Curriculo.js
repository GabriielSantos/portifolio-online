import { Component } from "react";

class Curriculo extends Component {
  render () {
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
                <h4>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h4>
                <h5>2022-2025</h5>
                <p><em>Fatec Presidente Prudente</em></p>
                <p>
                  Curso voltado ao desenvolvimento de sistemas, envolvendo
                  conceitos como lógica da programação, programação orientada a
                  objeto, conceitos de banco de dados, desenvolvimento web,
                  governança da TI e diversas outras matérias cruciais na
                  formação de um excelente desenvolvedor.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>TÉCNICO EM REDES DE COMPUTADORES</h4>
                <h5>2020-2021</h5>
                <p><em>ETEC Adolpho Arruda Mello</em></p>
                <p>
                  Curso voltado a área de redes, envolvendo conceitos sobre
                  redes de computadores, virtualização, sistemas operacionais de
                  servidores como windows server e centOS, cabeamento
                  estruturado e dispositivos de rede.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="cv-title">Profissional</h3>
              <div class="cv-item" data-anime="up">
                <h4>SUPORTE TÉCNICO</h4>
                <h5>10/2022 – Atualmente</h5>
                <p><em>Fleetnet telecomunicações</em></p>
                <p>
                  Atuo como Suporte Técnico na empresa Fleetnet, onde realizo
                  suporte remoto aos clientes por telefone.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>ATENDENTE 1</h4>
                <h5>10/2021 – 10/2022</h5>
                <p><em>RaiaDrogasil</em></p>
                <p>
                  Trabalhei como Atendente 1 na RaiaDrogasil e realizei
                  atividades de operação de caixa, atendimento ao cliente tanto
                  no balcão como no caixa e reposição de produtos.
                </p>
              </div>
              <div class="cv-item" data-anime="up">
                <h4>AJUDANTE GERAL</h4>
                <h5>03/2021 - 10/2021</h5>
                <p><em>Supermercados Nagai</em></p>
                <p>
                  Atuei na empresa na frente de loja onde eu exercia atividades
                  como empacotamento, operação de caixa, atendimento ao cliente
                  e reposição de produtos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Curriculo;