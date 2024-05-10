/* eslint-disable react/prop-types */
import '../../Estilos/styleProjectos.css'
import github from '../../Imagens/github-white.svg'
import redirect from '../../Imagens/icons8-share-48.png'



function Projecto(props) {
    return (
        <div className="containerProjecto">
            <div className="imagem_do_site_projecto">
                <img src={props.imagen} className="imagem_do_projecto"></img>
            </div>
            <div className="descricao_do_projecto_projecto">
                <p className="tituloDoprojecto">
                    {props.titulo}
                </p>
                <p className="descricaoProjecto">
                    {props.descricao}
                </p>
                <div className='imagen_tecnologia_usada_projecto'>
                       <img className='image_tecnologia ' src={props.tecnologia1} alt={props.alt1} /> 
                       <img className='image_tecnologia ' src={props.tecnologia2} alt={props.alt2} /> 
                       <img className='image_tecnologia ' src={props.tecnologia3} alt={props.alt3} /> 
                       <img className='image_tecnologia ' src={props.tecnologia4} alt={props.alt4} /> 
                </div>
                <div className="redirecionamentoProjecto">
                        <a href="#" target='_blank'><img className="imagen_codigo_redirect" src={github} alt="" />  Codigo</a>
                        <a href="#" target='_blank'>Demo <img className='imagen_codigo_redirect' src={redirect} alt="" /></a>
                </div>
            </div>
        </div>
    )
}



export default Projecto;