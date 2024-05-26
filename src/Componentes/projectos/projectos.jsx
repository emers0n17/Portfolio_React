import "../../Estilos/styleProjectos.css";
import Projecto from "./projecto";
import { EffectCards } from "swiper/modules";
//Imagens
import deslizar from '../../Imagens/deslize.png'
import infomarket from "../../Imagens/infomarket.jpg"
import java from '../../Imagens/java-svgrepo-com.svg'
import mysql from '../../Imagens/mysql-svgrepo-com.svg'
import meteorologia from '../../Imagens/weatherapp.png'
import formulario from '../../Imagens/formulario.png'
import weather_app from '../../Imagens/Wheater_app.png'
import blender from '../../Imagens/blender-svgrepo-com.svg'
import html5 from '../../Imagens/html-5-svgrepo-com.svg'
import css from '../../Imagens/css-svgrepo-com.svg'
import electron from '../../Imagens/electron-svgrepo-com.svg'
import figma from '../../Imagens/figma-svgrepo-com.svg'
import git from '../../Imagens/git-svgrepo-com.svg'
import gitHub from '../../Imagens/github-round-svgrepo-com.svg'
import javascript from '../../Imagens/javascript-svgrepo-com.svg'
import php from '../../Imagens/php-svgrepo-com.svg'
import unrealEngine from '../../Imagens/unreal-engine-svgrepo-com.svg'
import react from '../../Imagens/react-1-logo-svgrepo-com.svg'
import vite from '../../Imagens/vite.svg'

//Swiper slide
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

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
        "Um aplicativo de previsao e gestao de dados de tempo feito com Java e mySQL, nele podemos gerenciar dados meteorologicos com ajuda da API OpenWheaterMap.",
    },
    {
      id: "3",
      descricao:
        "Um site com referencia de diferentes formularios feito usando HTML, CSS.",
    },
    {
      id: "4",
      descricao:
        "Um aplicativo de previsao de tempo que usa tecnologia Java no Backend e Electron no Frontend, ele e capaz de requisitar informacoes de tempo online em tempo real e mostra elas ao usuario.",
    },
    {
      id: "5",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis .",
    },
  ];

  return (
    <div id="conatinerProjectos" className="conatinerProjectos">
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
            <SwiperSlide><Projecto descricao={slides[1].descricao} titulo={"Weather App"} tecnologia2={java} tecnologia3={mysql} alt2={"Java"} alt3={"mySQL"} imagen={meteorologia} /></SwiperSlide>
            <SwiperSlide><Projecto descricao={slides[2].descricao} titulo={"formulario"} tecnologia2={html5} tecnologia3={css} alt2={"Java"} alt3={"mySQL"} imagen={formulario} /></SwiperSlide>
            <SwiperSlide><Projecto descricao={slides[3].descricao} titulo={"Weather App"} tecnologia1={java} tecnologia2={electron} tecnologia3={html5} tecnologia4={css} alt2={"Java"} alt3={"mySQL"} imagen={weather_app} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Projectos;
