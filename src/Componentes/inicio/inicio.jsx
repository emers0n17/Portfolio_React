import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";


//A importar as imanges
import facebook from "../../Imagens/facebook-color-svgrepo-com.svg";
import instagram from "../../Imagens/instagram-1-svgrepo-com.svg";
import github from "../../Imagens/github-142-svgrepo-com.svg";
import linkedin from "../../Imagens/linkedin-svgrepo-com.svg";
import correto from "../../Imagens/correto.png";
import reactLogo from "../../Imagens/react.png";

//A importar o css
import "../../Estilos/estyleInicio.css";


function Menu() {
  return (
    <div id="menu">
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
        <a href="#menu">Contacto</a>
      </li>
    </div>
  );
}


function Slide() {
  return (
    <div id="slideContainer">
      {/* Your 3D model goes here */}
    </div>
  );
}


function InfoInicioReact3() {
  const dados = [
    { id: 1, image: facebook },
    { id: 2, image: instagram },
    { id: 3, image: github },
    { id: 4, image: linkedin },
  ];

  return (
    <div id="inforInicio" className="inforInicio">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.3.1/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/QV4JmesCEuBJqvSi/scene.splinecode"></spline-viewer>
    </div>  
  );
}

    // "- 👋 Olá, eu sou @Emerson Covane...",
    // "- 😄 Visite meu perfil: ...",
    // "- ⚡ Desenvolvedor web: ...",
    // "- 🌱 Estou...",
    // "- 👀 De um feedback...",

    

function InfoInicioReact2() {
  const nome = "/ emers0n17";

  return (
    <div id="inforInicio">
      <h1 id="tituloInicioReact">
        <h1 id="tituloInicioReactUser">{nome}</h1>
        <ol type="1" id="listaInicio">
          <p  id="listaInicioItem">- 👋 <TypeAnimation sequence={[ "Olá, eu sou Emerson Covane...", 3000]}speed={60} repeat={Infinity} id="listaInicioItem"/> </p>
          <p  id="listaInicioItem">- 😄 <TypeAnimation sequence={[ "Visite meu perfil ...", 3000]}speed={40} repeat={Infinity} id="listaInicioItem"/> </p>
          <p  id="listaInicioItem">- ⚡ <TypeAnimation sequence={[ "Desenvolvedor web ...", 3000]}speed={40} repeat={Infinity} id="listaInicioItem"/> </p>
          <p  id="listaInicioItem">- 🌱 <TypeAnimation sequence={[ "Em busca do conhecimento..."]}speed={60} repeat={Infinity} id="listaInicioItem"/> </p>
          <p  id="listaInicioItem">- 👀 <TypeAnimation sequence={[ "Dê um feedback...", 3000]}speed={30} repeat={Infinity} id="listaInicioItem"/> </p>
        </ol>
      </h1>
    </div>
  );
}


function InfoInicioReact1() {
  const txtApresentacao = (
    <>
      Olá, seja bem-vindo ao meu portfólio pessoal, aqui você pode ver a minha
      trajetória como desenvolvedor, as minhas habilidades e alguns dos meus
      projetos.
      <br />
      <button id="btnApresentacao">Comecar!</button>
    </>
  );
  return (
    <div id="inforInicio">
      <h1 id="tituloRecepcao">Bem-vindo</h1>
      <p id="textoRecepcao">{txtApresentacao}</p>
    </div>
  );
}




class Inicio extends React.Component {
  render() {
    return (
      <div id="inicio">
        <div id="containerInicio">
          <Menu />
          <div id="perfil">
            <InfoInicioReact1/>
            <InfoInicioReact2 />
            <InfoInicioReact3 />
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
