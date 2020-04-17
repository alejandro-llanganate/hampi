import React from 'react'
import './_botonHamburguesa.scss'

const BotonHambuergesa = props => (
    <button className="boton-hamburguesa" onClick={props.meClic}>
        <div className="boton-hamburguesa-linea" ></div>
        <div className="boton-hamburguesa-linea" ></div>
        <div className="boton-hamburguesa-linea" ></div>
    </button>        
);

export default BotonHambuergesa;