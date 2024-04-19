import React from "react";
import "../../Estilos/styleHabilidades.css";

//Imagens
import html5 from "../../Imagens/html-5.png";

class HabilidadeDesc extends React.Component {
  render() {
    const { nome, dominio, fundo } = this.props;
    const divStyle = {
      width: dominio + "%",
      background: fundo,
      color: "white",
      textAlign: "center",
      lineHeight: "30px", // Altura da barra de progresso
    };

    return (
      <div className="habilidade">
        <div className="barra">
          <div className="progresso" style={divStyle}>
            {nome + "          " + dominio + "%"}
          </div>
        </div>
      </div>
    );
  }
}

class Habilidades extends React.Component {
  render() {
    return (
      <div className="Habilidades">
        <div className="conteudoHabilidades">
          <h1 id="titulo">Minhas Habilidades</h1>
          <div id="habilidades">
            <HabilidadeDesc
              fundo="linear-gradient(to right, #0acffe 0%, #495aff 100%)"
              imagen={html5}
              nome="HTML"
              dominio={95}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
            <HabilidadeDesc
              fundo="linear-gradient(111.8deg, rgb(0, 104, 155) 19.8%, rgb(0, 173, 239) 92.1%)"
              imagen={html5}
              nome="CSS"
              dominio={90}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
            <HabilidadeDesc
              fundo="linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)"
              imagen={html5}
              nome="JavaScript"
              dominio={62}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
            <HabilidadeDesc
              fundo="linear-gradient(111.8deg, rgb(0, 104, 155) 19.8%, rgb(0, 173, 239) 92.1%)"
              imagen={html5}
              nome="TypeScript"
              dominio={60}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
            <HabilidadeDesc
              fundo="radial-gradient(circle at 10% 20%, rgb(7, 121, 222) 0%, rgb(20, 72, 140) 90%)"
              imagen={html5}
              nome="React.js"
              dominio={50}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
            <HabilidadeDesc
              fundo="linear-gradient(115.7deg, rgb(3, 79, 135) 6.2%, rgb(0, 184, 214) 112.9%)"
              imagen={html5}
              nome="Java"
              dominio={35}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
            <HabilidadeDesc
              fundo="radial-gradient(902px at 10% 20%, rgb(18, 50, 90) 0%, rgb(207, 199, 252) 100.2%)"
              imagen={html5}
              nome="SQL"
              dominio={55}
            />
            <img id="imagenLinguagem" src={html5} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Habilidades;
