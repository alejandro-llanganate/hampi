import React from 'react'
import './contactanos.scss'
import DataSocialMedia from '../DataSociaMedia'

const Contactanos = props => (
    <div className="contacto-container">
        <div className="contacto-container-cajaContainer">
            <h1> Encuentranos en: </h1>
            <div className="contacto-container-cajaContainer-box">
                <a rel="noopener noreferrer" href={DataSocialMedia.facebook} target="_blank"><i class='fa fa-facebook facebook'></i> <label> Hampi</label></a>
            </div>
            <div className="contacto-container-cajaContainer-box">
                 <a rel="noopener noreferrer" href={DataSocialMedia.instagram } target="_blank"><i class='fa fa-instagram instagram'></i> <label> @hampiMED</label></a>
            </div>
       
            <div className="contacto-container-cajaContainer-box">
                <i class='fa fa-phone phone'></i> <label> 0983472488</label>
            </div>
            <div className="contacto-container-cajaContainer-box">
                <i class='far fa-envelope envelope mail'></i> <label> hampimed@gmail.com</label>
            </div>
            <div className="local">
                <br /> <br />
                <h1> <i class='fa fa-home'> </i> Local</h1>
                <p>  Dolores Veintimilla y Remigio Crespo Toral (Barrio La Tola Baja, cerca del restaurante ChocoVaca). <br />
Quito, Ecuador 🇪🇨 </p>
            </div>
        </div>

       
        <div className="contacto-container-form">  
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdI4qKuAgrCfvAWjBDuh-GCc3ddIWaCFzqeoeV4E0QDHKapXA/viewform?embedded=true" width="840" height="998" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
        </div>
    </div>
)
export default Contactanos