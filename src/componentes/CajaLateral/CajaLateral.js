import React from 'react'
import './cajaLateral.scss'

const CajaLateral = props => {
    let claseCaja = "nav-lateral";
    if(props.clicEstado){
        claseCaja = "nav-lateral open"
    }
    return(
        <nav className={claseCaja}>
            <button onClick={props.cerrarClic} className="botonCerrar"> X </button>
            <ul>
                <li><a href="/"> Inicio </a></li>
                <li><a href="/Productos">    <i class="fas fa-cart-plus icono-compras"></i>     Productos </a></li>
                <li><a href="/Contáctanos"> Contáctanos </a></li>
            </ul>
            
        </nav>


    
    )
}

export default CajaLateral;
