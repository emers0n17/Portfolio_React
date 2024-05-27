/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

// Importar imagens
import facebook from "../../Imagens/facebook-color-svgrepo-com.svg";
import instagram from "../../Imagens/instagram-1-svgrepo-com.svg";
import github from "../../Imagens/github-142-svgrepo-com.svg";
import linkedin from "../../Imagens/linkedin-svgrepo-com.svg";
import background from '../../Imagens/background.webp';

// Importar CSS
import "../../Estilos/estyleInicio.css";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="menu">
      <div className={`menu-items ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#menu">Inicio</a>
        </li>
        <li>
          <a href="#sobrePainel">Sobre</a>
        </li>
        <li>
          <a href="#painelHabilidades">Habilidades</a>
        </li>
        <li>
          <a href="#conatinerProjectos">Projectos</a>
        </li>
        <li>
          <a href="#trajetoria_fundo">Trajetoria</a>
        </li>
        <li>
          <a href="#contacto_fundo">Contacto</a>
        </li>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bannerInicio">
      <img src={background} alt="" />
      <div className="bannerInicio_texto">
        <TypeAnimation sequence={["Ola!...", "Bem vindo ao meu Portfolio...", 1000]} speed={300} />
        <button id="bannerBotao" className="btn_card1_conteudo">
          <a id="boatao_banner_inicio" href="#perfil">Comecar!</a>
        </button>
      </div>
    </div>
  );
}

function InfoInicioReact1(props) {
  return (
    <div className="inforInicio">
      <div className="tituto_inforInicio">
        <h1>{props.titulo}</h1>
      </div>
      <div className="conteudo_inforInicio">
        {props.conteudo}
      </div>
    </div>
  );
}

function Conteudo_card1() {
  return (
    <div className="card1_conteudo">
      <h2 className="texto_conteudo_card1">
        Olá <br />
        seja bem-vindo ao meu portfólio pessoal, aqui e um espaco onde voce pode alem de me conhecer, ver as minhas competencias e experiencias como desenvolvedor.
        Vamos?
        <br />
      </h2>
      <button className="btn_card1_conteudo"><a href="#sobreContainer">Explorar!</a></button>
    </div>
  );
}

function Conteudo_card2() {
  return (
    <div className="card2_conteudo">
      <ol type="1" className="lista_card2_conteudo">
        <p className="item_lista_card2">1 - 👋 <TypeAnimation sequence={["Olá, eu sou Emerson Covane...", 3000]} speed={60} /></p>
        <p className="item_lista_card2">2 - 😄 <TypeAnimation sequence={["Visite meu perfil ...", 3000]} speed={40} /></p>
        <p className="item_lista_card2">3 - ⚡ <TypeAnimation sequence={["Desenvolvedor web ...", 3000]} speed={40} /></p>
        <p className="item_lista_card2">4 - 🌱 <TypeAnimation sequence={["Em busca do conhecimento..."]} speed={60} /></p>
        <p className="item_lista_card2">5 - 👀 <TypeAnimation sequence={["Dê um feedback...", 3000]} speed={30} /></p>
      </ol>
    </div>
  );
}

function Conteudo_card3() {
  return (
    <div className="card2_conteudo">
      <ol type="1" className="lista_card3_conteudo">
        <li><a href="https://github.com/emers0n17" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /> GitHub</a></li>
        <li><a href="https://www.instagram.com/emerson_cov" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /> Instagram</a></li>
        <li><a href="https://web.facebook.com/emerson.covane.3" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" />Facebook</a></li>
        <li><a href="https://mz.linkedin.com/in/emerson-covane-867937275" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="" />Linkedin</a></li>
      </ol>
    </div>
  );
}

function Conteudo_card4() {
  return (
    <div className="card2_conteudo">
      <ol type="1" id="lista_card4_conteudo" className="lista_card3_conteudo">
        <li>Proxima atuallização 10\ 06\ 2024</li>
        <li> --</li>
        <li></li>
        <li></li>
      </ol>
    </div>
  );
}

class Inicio extends React.Component {
  render() {
    return (
      <div id="inicio">
        <div id="containerInicio">

          <Banner />
          <Menu />
          <div id="perfil">
            <InfoInicioReact1 conteudo={<Conteudo_card1 />} titulo={"Bem vindo"} />
            <InfoInicioReact1 conteudo={<Conteudo_card2 />} titulo={"/ Inicio"} />
            <InfoInicioReact1 conteudo={<Conteudo_card3 />} titulo={"Contactos"} />
            <InfoInicioReact1 conteudo={<Conteudo_card4 />} titulo={"Noticias"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
