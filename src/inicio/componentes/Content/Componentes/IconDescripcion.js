import React from 'react'
import './iconDescripcion.scss'

const IconDescripcion = (props) => (
    <div className="icon-descripcion-content">
        <div className="icon-descripcion-content-serviceBox">
            <div className="icon-descripcion-content-serviceBox-i"> 
                <i class='far fa-star'></i> 
            </div>            
            <h1> Alta Calidad </h1>
            <p> Contamos con productos de gran calidad de empresas con certificaciones como BANDA+CARE y DISNACOMPANY.</p>
        </div>
        <div className="icon-descripcion-content-serviceBox">
            <div className="icon-descripcion-content-serviceBox-i"> 
                <i class='fa fa-whatsapp'></i> 
            </div>            
            <h1> Atención en WhatsApp </h1>
            <p> Comunícate con nosotros de manera directa a través de WhatsApp para concretar tu pedido de manera rápida.</p>
        </div>
        <div className="icon-descripcion-content-serviceBox">
            <div className="icon-descripcion-content-serviceBox-i"> 
                <i class='far fa-plus-square'></i> 
            </div>            
            <h1> Artículos de protección </h1>
            <p> Ante la emergencia sanitaria por el COVID-19 disponemos múltiples elementos de protección para ti o para tu empresa.</p>
        </div>
        <div className="icon-descripcion-content-serviceBox">
            <div className="icon-descripcion-content-serviceBox-i"> 
                <i class='fas fa-truck'></i> 
            </div>
            <h1> Servicio a domicilio </h1>
            <p> Envíos a todo Quito y Valle de Los Chillos sin un costo elevado de cobro por envío.</p>
        </div>
    </div>
)

export default IconDescripcion;