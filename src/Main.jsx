import React from "react";
import Inicio from "./Componentes/inicio/inicio";
import Habilidades from "./Componentes/habilidades/habilidades";

class Main extends React.Component {
  render() {
    return (
      <>
        <Inicio />
        <Habilidades />
      </>
    );
  }
}

export default Main;
