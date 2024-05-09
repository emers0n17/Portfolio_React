import "../../Estilos/styleProjectos.css";
import Projecto from "./projecto";
import { EffectCards } from "swiper/modules";
//Imagens
import deslizar from '../../Imagens/deslize.png'
import background from "../../Imagens/background2.png";
import infomarket from "../../Imagens/infomarket.jpg"
import java from '../../Imagens/java-svgrepo-com.svg'
import mysql from '../../Imagens/mysql-svgrepo-com.svg'

//Swiper slide
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
register();

function Projectos() {
  const slides = [
    {
      id: "1",
      descricao:
        "A InfoMarket e um aplicativo desktop feito em java, e uma loja de aparelhos informaticos online onde o usuario pode alem de apreciar os produtos, adiciona-los a um carrinho e efectuar o pagamento.",
    },
    {
      id: "2",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis .",
    },
    {
      id: "3",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis .",
    },
    {
      id: "4",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis .",
    },
    {
      id: "5",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis .",
    },
  ];

  return (
    <div className="conatinerProjectos">
      <div className="conteudoProjectos">
        <h1 id="textoProjectos">
        <img id="textoProjectoImagen" src={deslizar} alt="" />  Deslize para vizualizar os projectos
        </h1>
        <div className="swiperProjecto">
          <Swiper
            className="swiperDoProjecto"
            effect={"cards"}
            modules={[EffectCards]}
          >
            <SwiperSlide><Projecto descricao={slides[0].descricao} titulo={"Loja online"} tecnologia2={java} tecnologia3={mysql} alt2={"Java"} alt3={"mySQL"} imagen={infomarket} /></SwiperSlide>
            <SwiperSlide><Projecto imagen={background} /></SwiperSlide>
            <SwiperSlide><Projecto imagen={background} /></SwiperSlide>
            <SwiperSlide><Projecto imagen={background} /></SwiperSlide>
            <SwiperSlide><Projecto imagen={background} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projectos;
