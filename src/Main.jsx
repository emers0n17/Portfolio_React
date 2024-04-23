import React from "react";
import Inicio from "./Componentes/inicio/inicio";
import Habilidades from "./Componentes/habilidades/habilidades";
import './Estilos/styleMain.css'
import Sobre from "./Componentes/sobre/sobre";



//Componetes para os titulos
function TituloSecao(props){
  return <h1 id="tituloSecao">{props.desc}</h1>
}



class Main extends React.Component {
  render() {
    return (
      <>
        <Inicio />
        <TituloSecao desc="Sobre min"/>
        <Sobre />
        <TituloSecao desc="Minhas habilidades"/>
        <Habilidades />
      </>
    );
  }
}

export default Main;