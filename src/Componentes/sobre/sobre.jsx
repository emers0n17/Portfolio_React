import "../../Estilos/styleSobre.css";
import instagramImg from "../../Imagens/instagram-white.svg";
import facebookImg from "../../Imagens/facebook-white.svg";
import linkedinImg from "../../Imagens/Linkedin_whtite.svg";
import gitHubImg from "../../Imagens/github-white.svg";

function Perfil_card(){
  return (
    <div className="perfil_card">
      <div className="card_info">
        <img src={gitHubImg} alt="" />
        <img src={instagramImg} alt="" />
        <img src={facebookImg} alt="" />
        <img src={linkedinImg} alt="" />
        </div>
    </div>
  )
}

function Sobre_conteudo(){
  return (
    <div className="sobre_texto1">

    </div>
  )
}

function Sobre_text(){
  return (
    <div className="sobre_texto_container">
      <Sobre_conteudo />
      <button className="sobre_botao1">AutoBiografia</button>
      <button className="sobre_botao2">Experiencias</button>
      <button className="sobre_botao3">Ferramentas</button>
    </div>
  )
}

function Container_sobre() {
  return (
    <div className="card_container">
      <Perfil_card />
      <Sobre_text/>
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
