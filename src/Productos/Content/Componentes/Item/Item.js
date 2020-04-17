import React from 'react'
import './item.scss'

const Item = props => (
    <div className="item-box">
        <div className="item-box-precio"> 
            <h3> {props.price} </h3>
        </div>
         <div className="item-box-img">
          <img src={props.img} alt="producto"/>
        </div>
        <div className="item-box-titulo">
             {props.nombre}
        </div>    
    <div className="item-box-content">
        <div className="item-box-descripcion">
            <p> {props.descripcion} </p>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=593983472488&text=Hola%20HampiMED%2C%20deseo%20conversar%20con%20ustedes%20sobre%20tus%20productos."><button> <i class='fas fa-laptop-medical'></i>  Comprar </button></a>
    </div>
    </div>
)



export default Item