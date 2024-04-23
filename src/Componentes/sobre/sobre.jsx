import "../../Estilos/styleSobre.css";
import instagramImg from "../../Imagens/instagram-1-svgrepo-com.svg";
import facebookImg from "../../Imagens/facebook-color-svgrepo-com.svg";
import linkedinImg from "../../Imagens/linkedin-svgrepo-com.svg";
import gitHubImg from "../../Imagens/github-142-svgrepo-com.svg";

function Contacto(props) {
  return (
    <div id="cardSobreContactos">
      <img id="cardContactoImg" src={props.gitHub} alt="" />
      <img id="cardContactoImg" src={props.instagram} alt="" />
      <img id="cardContactoImg" src={props.facebook} alt="" />
      <img id="cardContactoImg" src={props.linkedin} alt="" />
    </div>
  );
}

function Card() {
  return (
    <div id="cardSobre">
      <div id="cardSobreFotoPerfil">
        <div id="cardSobreFoto"></div>
      </div>
      <div id="cardSobreInfo">
        <p id="cardSobreText">Emerson Domingos Covane</p>
        <p id="cardSobreText">Desenvolvedor web</p>
        <p id="cardSobreText">Front End</p>
        <p id="cardSobreText">Back End</p>
      </div>
    </div>
  );
}

function DescricaoSobre() {
  return (
    <div id="descricaoSobre">
      <div id="textoLocSobre">
        <h1 id="tituloTextoSobre">Quem sou eu?</h1>
        <p id="textoSobre">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          temporibus fugiat magnam totam dicta quam minima. Eos repellendus est
          tenetur mollitia accusantium, cumque unde similique ea asperiores
          quaerat eum quos perspiciatis obcaecati laborum laboriosam ullam cum
          earum atque doloremque placeat commodi itaque! Quam odio iste
          perferendis quas ad architecto id!
        </p>
      </div>

      <div id="textoLocSobre">
        <h1 id="tituloTextoSobre">Quem sou eu?</h1>
        <p id="textoSobre">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          temporibus fugiat magnam totam dicta quam minima. Eos repellendus est
          tenetur mollitia accusantium, cumque unde similique ea asperiores
          quaerat eum quos perspiciatis obcaecati laborum laboriosam ullam cum
          earum atque doloremque placeat commodi itaque! Quam odio iste
          perferendis quas ad architecto id!
        </p>
      </div>
      <Contacto
        linkedin={linkedinImg}
        instagram={instagramImg}
        gitHub={gitHubImg}
        facebook={facebookImg}
      />
    </div>
  );
}

function Sobre() {
  return (
    <div id="sobreContainer">
      <div id="sobrePainel">
        <Card />
        <DescricaoSobre />
      </div>
    </div>
  );
}

export default Sobre;
