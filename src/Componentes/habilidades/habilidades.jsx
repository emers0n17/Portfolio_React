import React from "react";
import "../../Estilos/styleHabilidades.css"; // Importe o arquivo CSS
import imagemHTML from '../../Imagens/html-5-svgrepo-com.svg'
import imagemCSS from '../../Imagens/css-svgrepo-com.svg'
import imagemJavaScript from '../../Imagens/javascript-svgrepo-com.svg'
import imagemTypeScript from '../../Imagens/typescript-official-svgrepo-com.svg'
import imagemJava from '../../Imagens/java-svgrepo-com.svg'
import imagemPhp from '../../Imagens/php-svgrepo-com.svg'
import imagemReact from '../../Imagens/react-1-logo-svgrepo-com.svg'
import imagemElectron from '../../Imagens/electron-svgrepo-com.svg'
import imagemMysql from '../../Imagens/mysql-svgrepo-com.svg'
import imagemGitHub from '../../Imagens/github-142-svgrepo-com.svg'
import imagemGit from '../../Imagens/git-svgrepo-com.svg'
import imagemFigma from '../../Imagens/figma-svgrepo-com.svg'
import imagemBlender from '../../Imagens/blender-svgrepo-com.svg'
import imagemUnrealEngine from '../../Imagens/unreal-engine-svgrepo-com.svg'
import imagemVsCode from '../../Imagens/vs-code-svgrepo-com.svg'

class Linguagem extends React.Component {
  render() {
    const estilo = {
      backgroundColor: `${this.props.corFundo}`,
    };

    return (
      <div id="linguagenHabilidades">
        <img id="imagenLinguagemhabilidades" style={estilo} src={this.props.imagem} alt={this.props.linguagem} />
        <h1 id="nomeLinguagemHabilidades">{this.props.linguagem}</h1>
        <h1 id="descricaoLinguagemHabilidades">Ver mais...</h1>
      </div>
    );
  }
}

function TituloInfo(props) {
  const TituloInfoStyle = { 
    color: `${props.cor}`
  }
  return <h1 style={TituloInfoStyle} id="ttituloHabilidades">{props.titulo}</h1>;
}

const Habilidades = () => {
  return (
    <div id="containerHabilidades">
      <div id="painelHabilidades">
      <TituloInfo cor="white" titulo="Linguages"/>
        <div id="linguagensHabilidades">
          <Linguagem imagem={imagemHTML} corFundo="oarangered" linguagem="HTML" />
          <Linguagem imagem={imagemCSS} corFundo="lightBlue" linguagem="CSS" />
          <Linguagem imagem={imagemJavaScript} corFundo="rgb(247,223,30)" linguagem="JavaScript" />
          <Linguagem imagem={imagemTypeScript} corFundo="rgb(49,120,198)" linguagem="TypeScript" />
          <Linguagem imagem={imagemJava} corFundo="white" linguagem="Java" />
          <Linguagem imagem={imagemPhp} corFundo="#777bb3" linguagem="PHP" />
        </div>

        <TituloInfo cor="white" titulo="Frameworks/ Bibliotecas/ Base de dados"/>
        <div id="framworksHabilidades">
          <Linguagem imagem={imagemReact} corFundo="#222222" linguagem="React.js & React.Ts" />
          <Linguagem imagem={imagemElectron} corFundo="white" linguagem="Electron" />
          <Linguagem imagem={imagemMysql} corFundo="white" linguagem="mySQL" />
        </div>
        <TituloInfo cor="white" titulo="Ferramentas"/>
        <div id="ferramentasHabilidades">
          <Linguagem imagem={imagemGitHub} corFundo="white" linguagem="GitHub" />
          <Linguagem imagem={imagemGit} corFundo="white" linguagem=".Git" />
          <Linguagem imagem={imagemFigma} corFundo="white" linguagem="Figmat" />
          <Linguagem imagem={imagemBlender} corFundo="white" linguagem="Blender" />
          <Linguagem imagem={imagemUnrealEngine} corFundo="white" linguagem="Unreal Engine" />
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
