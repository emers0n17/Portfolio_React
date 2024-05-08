import React from 'react';
import { createRoot } from 'react-dom';
import './Estilos/global.css';
import Main from './Main';
//Swiper slide
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);