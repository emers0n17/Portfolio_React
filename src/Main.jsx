import React from "react";
import Inicio from "./Componentes/inicio/inicio";
import Habilidades from "./Componentes/habilidades/habilidades";
import './Estilos/styleMain.css'
import Sobre from "./Componentes/sobre/sobre";
import Projectos from "./Componentes/projectos/projectos";
import Trajetoria from "./Componentes/trajetoria/trajetoria";
import Contacto from "./Componentes/contacto/contacto";


//Componetes para os titulos
export function TituloSecao(props){
  // eslint-disable-next-line react/prop-types
  return <h1 id="tituloSecao">{props.desc}</h1>
}

//Componente para poder dar espaco
function Espaco(props){
  const estilo = {
    // eslint-disable-next-line react/prop-types
    height: `${props.height}px`
  }
  return <div style={estilo} id="esacoEntreSeccoes"></div>
}

class Main extends React.Component {
  render() {
    return (
      <>
        <Inicio />
        <Espaco height="10" color="blue" />
        <TituloSecao   desc="Sobre min"/>
        <Sobre />
        <Espaco height="10" color="blue" />
        <TituloSecao desc="Minhas habilidades"/>
        <Espaco height="10" color="blue" />
        <Habilidades />
        <Espaco height="10" color="blue" />
        <TituloSecao desc="Meus projectos"/>
        <Espaco height="10" color="blue" />
        <Projectos />
        <Espaco height="10" color="blue" />
        <TituloSecao desc="Road Map"/>
        <Espaco height="10" color="blue" />
        <Trajetoria />
        <TituloSecao desc="Contactos"/>
        <Contacto />
      </>
    );
  }
}

export default Main;
