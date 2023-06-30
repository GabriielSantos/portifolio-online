import emailjs from '@emailjs/browser';
import { useState } from "react";
import Swal from 'sweetalert2';
import './Contato.css';
import Footer from '../Footer/Index';

export default function ContatoComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      Swal.fire('Preencha todos os Campos');
      return;
    }

    const templateParams =  {
      from_name: name,
      message: message,
      email: email, 
    }

    emailjs.send("service_xnwzwpd", "template_i3unitf", templateParams, "i5R5zRmaQRYRN8ll-" )
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Email Enviado com Sucesso'
        })
      }, (error) => {
        console.log("ERRO: ", error);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Ops..Ocorreu alguma falha ao enviar o email, tente novamente.'
        })
      })
  }

    return (
       <>
        <section id="contato" className="pb-5 pt-5">
          <div className="container mb-5">
            <h2 className="pt-3 pb-3">Contato</h2>
            <div className="row">
              <div className="col-xl-5 pt-0 mb-3" data-anime="left">
                <div className="card p-5 shadow border-0">
                  <div className="row">
                    <div className="endereco col-xxl-6">
                      <h4><i className="bi bi-phone me-2"></i>Celular</h4>
                      <p>(35) 9 9109-4101</p>
                    </div>
                    <div className="whatsapp col-xxl-6 mb-2">
                      <h4><i className="bi bi-whatsapp me-2"></i>WhatsApp</h4>
                      <a
                        href="http://api.whatsapp.com/send?phone=3591094101"
                        className="btn btn-success rounded-pill"
                        aria-label="enviar mensagem via whatsapp para Gabriel"
                        target="_blank" rel="noreferrer"
                        ><i className="bi bi-send-fill me-2"></i>Falar com Gabriel</a
                      >
                    </div>
                    <div className="localizacao col-xxl-6 align-self-end">
                      <h4><i className="bi bi-geo-alt me-2"></i> Localização:</h4>
                    </div>
                  </div>
                  <iframe
                    title="Localização Gabriel" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.785988358967!2d-46.638174724748104!3d-23.57612857878968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce599cbfa3aa5f%3A0xac5dac0b1b9b48f9!2zUi4gVG9ww6F6aW8sIDczMCAtIEFjbGltYcOnw6NvLCBTw6NvIFBhdWxvIC0gU1AsIDA0MTA1LTA2Mw!5e0!3m2!1spt-BR!2sbr!4v1687399881057!5m2!1spt-BR!2sbr" 
                    width="400" 
                    height="300" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
              <div className="col-xl-7 mt-5 mt-md-0" data-anime="up">
                <div className="card p-5 h-100 shadow border-0">
                  <h4 className="mb-3">
                    <i className="bi bi-envelope-at"></i> Entrar em contato via
                    e-mail:
                  </h4>
                  <form className="row g-3" action="/send" method="POST">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control "
                          id="nome"
                          placeholder="nome"
                          name="nome"
                          required
                          onChange={(e) => setName(e.target.value)}
                          value={ name }
                        />
                        <label for="nome" className="text-dark"
                          >Insira seu nome...</label
                        >
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email"
                          name="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={ email }
                        />
                        <label for="email" className="text-dark"
                          >Insira seu e-mail...</label
                        >
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="comentario"
                          id="mensagem"
                          name="mensagem"
                          required
                          onChange={(e) => setMessage(e.target.value)}
                          value={ message }
                        ></textarea>
                        <label for="mensagem" className="text-dark"
                          >Insira sua mensagem aqui...</label
                        >
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <button
                        id="btnEnviar"
                        type="submit"
                        className="btn btn-primary rounded-pill"
                        onClick={ sendEmail }
                      >
                        <i className="bi bi-send-fill me-2"></i>Enviar mensagem
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
       </>
    );
}