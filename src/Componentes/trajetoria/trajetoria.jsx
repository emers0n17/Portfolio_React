/* eslint-disable react/prop-types */
import '../../Estilos/trajetoria.css'

import blender from '../../Imagens/blender-svgrepo-com.svg'
import html5 from '../../Imagens/html-5-svgrepo-com.svg'
import css from '../../Imagens/css-svgrepo-com.svg'
import electron from '../../Imagens/electron-svgrepo-com.svg'
import figma from '../../Imagens/figma-svgrepo-com.svg'
import git from '../../Imagens/git-svgrepo-com.svg'
import gitHub from '../../Imagens/github-round-svgrepo-com.svg'
import javascript from '../../Imagens/javascript-svgrepo-com.svg'


function Level(props) {
    const styles = {
        marginTop: `${props.espaco}px`
    };

    const styleImg = {
        backgroundColor: `${props.fundoImg}`
    }

    return (
        <div style={styles} className="trajetoria_level">
            <div className='trajetoria_level_conteudo'>
                <div className='trajetoria_level_conteudo_img'>
                    {props.imagens.map((imagem, index) => (
                        <img key={index} src={imagem} />
                    ))}
                </div>
                
                <h1 className='trajetoria_level_conteudo_texto'>
                    {props.descricao}
                </h1>            
            </div>

            <div className="trajetoria_reta_encima"></div>
            <div className="trajetoria_reta_enbaixo"></div>
            <h1 className="trajetoria_reta_enbaixo_data">
                {props.data}
            </h1>
        </div>
    );
}


const imagens1 = [ `${blender}`];
const imagens2 = [ `${html5}`,`${css}`, `${javascript}`];
const descricao = [
    'No ano de 2019 dei os meus primeiros passos nesse mundo, tive o interesse e criar modelos 3d usando a ferramenta Blender.',
    'No ano de 2020, fui introduzido ao mundo da programacao web e fui introduzido ao HTML5 o CSS3 e ao JSECMA6'
]

function Trajetoria(){
    return (
        <div className="trajetoria_fundo">
            <div className='trajetoria_container'>
            <Level data={'2020/ 01/ 01'} espaco={50} descricao={descricao[0]} imagens={imagens1} />
            <Level data={'2019/ 01/ 01'} espaco={250} descricao={descricao[1]} imagens={imagens2} />
            </div>
        </div>
    )
}

export default Trajetoria;