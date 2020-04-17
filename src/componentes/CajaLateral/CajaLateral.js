import React from 'react'
import {Link} from 'react-router-dom'
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
                    <Link className="link-slide"  to="/hampi/" style={{textDecoration: "none"}}> 
                        <li><a href="/"> Inicio </a></li>
                    </Link>
                    <Link className="link-slide" to="/hampi/Productos" style={{textDecoration: "none"}}> 
                        <li><a href="/">    Productos </a></li>
                    </Link>
                    <Link className="link-slide" to="/hampi/Contáctanos" style={{textDecoration: "none"}}> 
                          <li><a href="/"> Contáctanos </a></li>
                    </Link>
            </ul>
            
        </nav>


    
    )
}

export default CajaLateral;
