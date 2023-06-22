import { Component } from 'react';
import './Home.css';

class HomeComponent extends Component {
  render() {
    return (
      <section id="inicio" className="row m-0 p-0">
        <div
          className="col-12 col-xxl-7 d-flex align-items-center justify-content-center flex-column"
        >
          <h2 className="text-white text-shadow">Gabriel Santos</h2>
          <span className="text-shadow text-white" id="subtitle">
            Desenvolvedor Front-end
          </span>
        </div>
      </section>
    );
  }
}

export default HomeComponent;
