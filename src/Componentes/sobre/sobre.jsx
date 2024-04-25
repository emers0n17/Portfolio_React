import "../../Estilos/styleSobre.css";
import instagramImg from "../../Imagens/instagram-white.svg";
import facebookImg from "../../Imagens/facebook-white.svg";
import linkedinImg from "../../Imagens/Linkedin_whtite.svg";
import gitHubImg from "../../Imagens/github-white.svg";


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
    <>
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
    </>
  );
}

function DescricaoSobre() {
    return (
        <>
            <div id="descricaoSobre">
                <div id="textoLocSobre">
                    <h1 id="tituloTextoSobre">Biografia</h1>
                    <p id="textoSobre">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
                        temporibus fugiat magnam totam dicta quam minima. Eos repellendus est
                        tenetur mollitia accusantium, cumque unde similique ea asperiores
                        quaerat eum quos perspiciatis obcaecati laborum laboriosam ullam cum
                        earum atque doloremque placeat commodi itaque! Quam odio iste
                        perferendis quas ad architecto id!
                    </p>
                    {/*Exemplo de biografia
                    Olá! Meu nome é João Silva. Sou um desenvolvedor web apaixonado com
            mais de 5 anos de experiência na indústria de tecnologia. Nasci e
            cresci em São Paulo, Brasil, e me formei em Ciência da Computação
            pela Universidade de São Paulo. Minha jornada profissional começou
            como estagiário em uma startup local, onde rapidamente subi de
            posição para se tornar um desenvolvedor full-stack. Desde então,
            trabalhei em vários projetos desafiadores e inovadores, adquirindo
            habilidades em diversas tecnologias e linguagens de programação.
            Além do meu trabalho, gosto de contribuir para a comunidade de
            código aberto e de escrever blogs técnicos para ajudar outros
            desenvolvedores. No meu tempo livre, gosto de ler, viajar e passar
            tempo com minha família e amigos.*/}
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
            <Contacto linkedin={linkedinImg} instagram={instagramImg} gitHub={gitHubImg} facebook={facebookImg}/>
            </div>
        </>
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
