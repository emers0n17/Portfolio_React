import "../../Estilos/styleSobre.css";
import instagramImg from '../../Imagens/instagram-1-svgrepo-com.svg';
import facebookImg from '../../Imagens/facebook-color-svgrepo-com.svg';
import linkedinImg from '../../Imagens/linkedin-svgrepo-com.svg';
import gitHubImg from '../../Imagens/github-142-svgrepo-com.svg';


function Contacto(props){
  return (
    <div id="cardSobreContactos">
    <img id="cardContactoImg" src={props.imagem} alt="" />
  </div>
  )
}

function Card() {
  return (
    <div id="cardSobre">
      <div id="cardSobreFotoPerfil">
        <div id="cardSobreFoto"></div>
      </div>
      <div id="cardSobreInfo">
        {/*<Contacto imagem={gitHubImg} nome="GitHub" />
        <Contacto imagem={facebookImg} nome="Faceboock" />
        <Contacto imagem={instagramImg} nome="Instagram" />
        <Contacto imagem={linkedinImg} nome="Linkedin" />*/}
        <Contacto imagem={linkedinImg} nome="Linkedin" />
      </div>
    </div>
  );
}

function DescricaoSobre() {
  return (
    <div id="descricaoSobre">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
      temporibus fugiat magnam totam dicta quam minima. Eos repellendus est
      tenetur mollitia accusantium, cumque unde similique ea asperiores quaerat
      eum quos perspiciatis obcaecati laborum laboriosam ullam cum earum atque
      doloremque placeat commodi itaque! Quam odio iste perferendis quas ad
      architecto id!
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
