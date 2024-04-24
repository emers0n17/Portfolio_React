import React from "react";

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
        <a href="#painelHabilidades">Habilidades</a>
      </li>
      <li>
        <a href="#">Ferramentas</a>
      </li>
      <li>
        <a href="#">Projectos</a>
      </li>
      <li>
        <a href="#">Constactos</a>
      </li>
    </div>
  );
}

function InfoInicio() {
  return <div id="inforInicio"></div>;
}

function InfoInicioReact2() {
  const nome = "> emers0n17";

  const items = [
    "- 👋 Olá, eu sou @Emerson Covane...",
    "- 😄 Visite meu perfil: ...",
    "- ⚡ Desenvolvedor web: ...",
    "- 🌱 Estrou sempre a aprender...",
    "- 👀 De um feedback..."
  ]

  return (
    <div id="inforInicio">
      <h1 id="tituloInicioReact">
        <h1 id="tituloInicioReactUser">{nome}</h1>
        <ol type="1" id="listaInicio">
          <p id="listaInicioItem">{items[0]}</p>
          <p id="listaInicioItem">{items[1]}</p>
          <p id="listaInicioItem">{items[2]}</p>
          <p id="listaInicioItem">{items[3]}</p>
          <p id="listaInicioItem">{items[4]}</p>
        </ol>
      </h1>
    </div>
  );
}


function InfoInicioReact1() {
  const txtApresentacao = (
    <>
      Olá, seja bem-vindo ao meu portfólio pessoal, aqui você pode ver a minha trajetória como desenvolvedor, as minhas habilidades e alguns dos meus projetos.<br/>
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


function Perfil() {
  return (
    <div id="imagen">
      <div id="powered">
        <p>Powered by</p>
        <img src={reactLogo} alt="" />
      </div>
      <img id="minhaImagen" src={correto} alt="Minha imagen" />
      <h1>@Emerson_Covane</h1>
      <div id="contactos">
        <img id="contactosImg" src={facebook} alt="" />
        <img id="contactosImg" src={instagram} alt="" />
        <img id="contactosImg" src={github} alt="" />
        <img id="contactosImg" src={linkedin} alt="" />
      </div>
    </div>
  );
}

function Dados() {
  return (
    <div id="dados1">
      <h1 id="apresentacaoTxt">Bem vindo!</h1>
      <p id="sobreTxt">
        Olá!
        <br />
        Sou <span id="spamAzul">Emerson Domingos Covane</span>, atualmente estou
        cursando Engenharia Informática no Instituto Superior Politecnico de
        Tete em Tete/Mocambique, e este e o meu{" "}
        <span id="spamVermelho">Portfolio</span>.<br />
        Já criei alguns aplicativos para desktop, porém, meu principal foco está
        no desenvolvimento <span id="spamVermelho">Web</span>. Veja aqui as
        minhas <span id="spamAzul">habilidades</span> como programador e alguns{" "}
        <span id="spamAzul">projectos</span> por min desenvolvidos.
      </p>
    </div>
  );
}

class Inicio extends React.Component {
  render() {
    return (
      <div id="inicio">
        <Menu />
        <div id="containerInicio">
          <div id="perfil">
            {/*
            <Perfil />
            <Dados />
            */}
            <InfoInicioReact1 />
            <InfoInicioReact2 />
            <InfoInicio />
            <InfoInicio />
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
