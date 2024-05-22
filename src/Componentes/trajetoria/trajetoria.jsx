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
import php from '../../Imagens/php-svgrepo-com.svg'
import mysql from '../../Imagens/mysql-svgrepo-com.svg'
import unrealEngine from '../../Imagens/unreal-engine-svgrepo-com.svg'
import java from '../../Imagens/java-svgrepo-com.svg'
import react from '../../Imagens/react-1-logo-svgrepo-com.svg'
import vite from '../../Imagens/vite.svg'

function Level(props) {
    const styles = {
        marginTop: `${props.espaco}px`
    };

    return (
        <div style={styles} className="trajetoria_level">
            <div className='trajetoria_level_conteudo'>
                <div className='trajetoria_level_conteudo_img'>
                    {props.imagens.map((imagem, index) => (
                        <img 
                            key={index} 
                            src={imagem} 
                            style={{ backgroundColor: props.fundoImg[index] }}
                        />
                    ))}
                </div>

                <h1 className='trajetoria_level_conteudo_texto'>
                    {props.descricao}
                </h1>
            </div>

            <div className="trajetoria_reta_encima"></div>
            <div className="trajetoria_reta_enbaixo"><div className="trajetoria_reta_enbaixo_preenchimento"></div></div>
            <h1 className="trajetoria_reta_enbaixo_data">
                {props.data}
            </h1>
        </div>
    );
}

const dados = {
    imagens: [
        [blender],
        [html5, css, javascript],
        [php, unrealEngine],
        [php, javascript, css, html5, mysql],
        [java, mysql, gitHub],
        [java, electron, react, vite, git,],
    ],
    total: [blender, html5, css, javascript, php, unrealEngine, mysql,java,gitHub,electron,react,vite,git,figma],
    color: ['white','#f16529', '#3178c6', '#f7df1e'
        ,'#777bb3', 'white', 'white', 'white', 'white', 'white',
        'transparent','transparent','transparent', 'white'
    ],
    descricao: [
        'No ano de 2019 dei os meus primeiros passos nesse mundo, tive o interesse e criar modelos 3d usando a ferramenta Blender.',
        'No ano de 2020, fui introduzido ao mundo da programação web e fui introduzido ao HTML5, ao CSS3 e ao JSECMA6.',
        'No ano de 2021, além de aprender PHP, decidi aprender a criar video jogos e para isso decidi investir no Unreal Engine e na linguagem C++.',
        'No ano de 2022, Decidi aperfeicoar os meus conhecimentos e habilidades web, com ferramentas como Node.js, PhP, mySQL, HTML, CSS e JS',
        'No ano de 2023, Aprendi mais sobre o backend com Java e mySQL. Tambem criei o meu perfil na plataforma GitHub.',
        'No ano de 2024, Continuei aprendendo mais sobre o Backend com o Java, Javascript e mysql, e tambem aprendi algumas frameworks como o Electron e o React'
    ],
    styles: [
        ['white'],
        ['#f16529', '#3178c6', '#f7df1e'],
        ['#777bb3', 'white'],
        ['#777bb3', '#f7df1e',  '#3178c6',  'white', 'white'], 
        ['white' ,'white', 'white'],
        ['transparent' ,'transparent', 'transparent', 'transparent', 'transparent'],
    ]
}

function Colecao(){
    return (
        <div className="total_trajetoria">
            {dados.total.map((item, index) => (
                <img style={{backgroundColor: dados.color[index] }} key={index} src={item} alt="" />
            ))}
        </div>
    )
}

function Trajetoria() {
    return (
        <div className="trajetoria_fundo">
            <div className='trajetoria_container'>
                <Level data='2019/01/01' fundoImg={dados.styles[0]} espaco={50} descricao={dados.descricao[0]} imagens={dados.imagens[0]} />
                <Level data='2020/01/01' fundoImg={dados.styles[1]} espaco={250} descricao={dados.descricao[1]} imagens={dados.imagens[1]} />
                <Level data='2021/01/01' fundoImg={dados.styles[2]} espaco={250} descricao={dados.descricao[2]} imagens={dados.imagens[2]} />
                <Level data='2022/01/01' fundoImg={dados.styles[3]} espaco={250} descricao={dados.descricao[3]} imagens={dados.imagens[3]} />
                <Level data='2022/01/01' fundoImg={dados.styles[4]} espaco={250} descricao={dados.descricao[4]} imagens={dados.imagens[4]} />
                <Level data='2022/01/01' fundoImg={dados.styles[5]} espaco={250} descricao={dados.descricao[4]} imagens={dados.imagens[5]} />
                <Colecao imagem={vite} />
            </div>
        </div>
    );
}

export default Trajetoria;
