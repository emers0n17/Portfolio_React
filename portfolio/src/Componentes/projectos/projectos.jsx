import '../../Estilos/styleProjectos.css'
import Projecto from './projecto';
import background from '../../Imagens/background2.png'

//Swiper slide
import { register } from 'swiper/element/bundle'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
register();

function Projectos() {
    
    const descricao = {
        
        projecto2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis repellendus beatae! Iste quis ea ratione.",
        projecto3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis repellendus beatae! Iste quis ea ratione.",
        projecto4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis repellendus beatae! Iste quis ea ratione.",
        projecto5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis repellendus beatae! Iste quis ea ratione."
    }

    const slides = [
        {id: "1", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis ."},
        {id: "2", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis ."},
        {id: "3", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis ."},
        {id: "4", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis ."},
        {id: "5", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem illum laboriosam numquam rerum, obcaecati voluptatem aliquid facere, ad officiis maxime officia delectus alias enim sapiente doloribus repellendus. Recusandae quia explicabo dolor, corporis cumque nostrum quidem vero. Sit deleniti doloremque commodi rem, numquam reiciendis ."}
    ]

    return (
        <div className="conatinerProjectos">
            <div className="conteudoProjectos">
            <Swiper className='swiper' slidesPerView={1} pagination= {{clickable: true}} navigation>
                {slides.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Projecto imagen={background} descricao={item.descricao}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}

export default Projectos;