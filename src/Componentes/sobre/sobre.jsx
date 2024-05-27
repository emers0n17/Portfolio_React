/* eslint-disable react/prop-types */
import { useState } from 'react';
import "../../Estilos/styleSobre.css";
import instagramImg from "../../Imagens/instagram-white.svg";
import facebookImg from "../../Imagens/facebook-white.svg";
import linkedinImg from "../../Imagens/Linkedin_whtite.svg";
import gitHubImg from "../../Imagens/github-white.svg";

function Perfil_card() {
  return (
    <div className="perfil_card">
      <div className="card_info">
        <a href="https://github.com/emers0n17" target="_blank" rel="noopener noreferrer">
          <img src={gitHubImg} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/emerson_cov" target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" />
        </a>
        <a href="https://web.facebook.com/emerson.covane.3" target="_blank" rel="noopener noreferrer">
          <img src={facebookImg} alt="Facebook" />
        </a>
        <a href="https://mz.linkedin.com/in/emerson-covane-867937275" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

function Sobre_conteudo({ selectedSection }) {
  let content;
  switch (selectedSection) {
    case 'autobiografia':
      content = (
        <div className="autobiografia">
          <p>
            Olá, eu sou Emerson Covane, um desenvolvedor apaixonado por tecnologia desde cedo. Minha jornada na
            programação começou quando eu tinha 15 anos, e desde então, nunca parei de aprender e explorar novas
            tecnologias. Com uma forte base em desenvolvimento web e um interesse crescente por inteligência artificial,
            estou sempre buscando novas formas de me desafiar e crescer na minha carreira.
          </p>
        </div>
      );
      break;
    case 'experiencias':
      content = (
        <div className="experiencias">
          <ul>
            <li>Desenvolvedor Frontend na Tech Solutions - 2022-2024</li>
          </ul>
        </div>
      );
      break;
    case 'ferramentas':
      content = (
        <div className="ferramentas">
          <ul>
            <li>Visual Studio Code</li>
            <li>Git & GitHub</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      );
      break;
    default:
      content = <p>Selecione uma seção para saber mais sobre min..</p>;
  }

  return (
    <div className="sobre_texto1">
      {content}
    </div>
  );
}

function Sobre_text() {
  const [selectedSection, setSelectedSection] = useState('');

  return (
    <div className="sobre_texto_container">
      <Sobre_conteudo selectedSection={selectedSection} />
      <button className="sobre_botao1" onClick={() => setSelectedSection('autobiografia')}>Autobiografia</button>
      <button className="sobre_botao2" onClick={() => setSelectedSection('experiencias')}>Experiências</button>
      <button className="sobre_botao3" onClick={() => setSelectedSection('ferramentas')}>Ferramentas</button>
    </div>
  );
}

function Container_sobre() {
  return (
    <div className="card_container">
      <Perfil_card />
      <Sobre_text />
    </div>
  );
}

function Sobre() {
  return (
    <div id="sobreContainer">
      <Container_sobre />
    </div>
  );
}

export default Sobre;
