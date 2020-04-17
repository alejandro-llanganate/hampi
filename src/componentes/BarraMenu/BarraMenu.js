import React from 'react'
import './_barraMenu.scss'
import BotonHambuergesa from '../CajaLateral/BotonHamburgesa'
import {Link} from 'react-router-dom'
import Logo from "./LOGOhAMPI.png"

const BarraMenu = props => {
    let claseBarra = "barra-menu";
    if(props.scrolled === true){
        console.log("cua"+props.scrolled)
        claseBarra = "barra-menu scrolled"
    }
    
    return(
    <header className={claseBarra}>
        <nav>
            <div className="boton-hamburguesa">
                <BotonHambuergesa meClic={props.botonClic}/>
            </div>
            <div className="barra-menu-logo"> <Link to="/hampi/" ><img className="logoTipo" src={Logo} alt="Logotipo de HampiMED"/></Link></div>
                <ul className="barra-menu-nav" >
                    <Link to="/hampi/" className="barra-menu-nav-link-router"> 
                        <li><a href="/"> Inicio </a></li>
                    </Link>
                    <Link to="/hampi/Productos" className="barra-menu-nav-link-router"> 
                        <li><a href="/">   <i class="fas fa-cart-plus icono-compras"></i>  Productos </a></li>
                    </Link>
                    <Link to="/hampi/Contáctanos" className="barra-menu-nav-link-router"> 
                          <li><a href="/"> Contáctanos </a></li>
                    </Link>

                </ul>    
        </nav>
    </header>
);
}
export default BarraMenu;