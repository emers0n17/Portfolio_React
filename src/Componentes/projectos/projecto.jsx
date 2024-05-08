/* eslint-disable react/prop-types */
import '../../Estilos/styleProjectos.css'

function Projecto(props) {
    return (
        <div className="containerProjecto">
            <div className="imagem_do_site_projecto">
                <img src={props.imagen} className="imagem_do_projecto"></img>
            </div>
            <div className="descricao_do_projecto_projecto">
                <p className="descricaoProjecto">
                    {props.descricao}
                </p>
                <div className='imagen_tecnologia_usada_projecto'>
                    
                </div>
                <div className="redirecionamentoProjecto">

                </div>
            </div>
        </div>
    )
}

export default Projecto;