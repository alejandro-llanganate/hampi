import React from 'react'
import './pago.scss'

const Pago = props => (
        <div className="pago-content">
            <h1>¿Cómo comprar en HAMPI?</h1>
            <div className="pago-content-box">
                <div><i class='fas fa-poll-h ic'></i></div>
                <p> 1. Revisa nuestro catálogo</p>
            </div>
            <div className="pago-content-box">
                <div><i class='fas fa-mobile-alt ic'></i> </div>
                <p> 2. Haz Captura de pantalla del producto que buscas</p>
            </div>
            <div className="pago-content-box">
                <div><i class='fa fa-whatsapp ic'></i> </div>
                <p> 3. Envíanos y comunícate a 0983472488 para concretar la compra</p>
            </div>
            <div className="pago-content-box">
                <div><i class='fas fa-user-tie ic'></i> </div>
                <p>Para empresas: realizamos cotizaciones, comunícate a nuestro número</p>
            </div>
            <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=593983472488&text=Hola%20HampiMED%2C%20necesito%20ayuda%20con%20con%20mi%20compra." target="_blank"><button className="pago-content-botton">
            <i class='fa fa-whatsapp'></i> Asistente de compra
            </button></a>
        </div>
)

export default Pago