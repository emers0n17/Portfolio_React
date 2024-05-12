import React from "react";
import Inicio from "./Componentes/inicio/inicio";
import Habilidades from "./Componentes/habilidades/habilidades";
import './Estilos/styleMain.css'
import Sobre from "./Componentes/sobre/sobre";
import Projectos from "./Componentes/projectos/projectos";

// import { register } from 'swiper/element/bundle'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// import 'swiper/css/pagination';

// register();

//Componetes para os titulos
export function TituloSecao(props){
  // eslint-disable-next-line react/prop-types
  return <h1 id="tituloSecao">{props.desc}</h1>
}

//Componente para poder dar espaco
function Espaco(props){
  const estilo = {
    // eslint-disable-next-line react/prop-types
    height: `${props.height}vh`
  }
  return <div style={estilo} id="esacoEntreSeccoes"></div>
}

class Main extends React.Component {
  render() {
    return (
      <>
        <Inicio />
        <Espaco height="2" color="blue" />
        <TituloSecao   desc="Sobre min"/>
        <Sobre />
        <TituloSecao desc="Minhas habilidades"/>
        <Habilidades />
        <TituloSecao desc="Meus projectos"/>
        <Projectos />
      </>
    );
  }
}

export default Main;
