/* eslint-disable react/prop-types */
import '../../Estilos/trajetoria.css'


function Level(props){
    return(
        <div className="trajetoria_level">
            <div className="trajetoria_reta_encima"></div>
            <div className="trajetoria_reta_enbaixo"></div>
        </div>
    )
}


function Trajetoria(){
    return (
        <div className="trajetoria_fundo">
            <div className='trajetoria_container'>
                <Level />
            </div>
        </div>
    )
}

export default Trajetoria;