import React from 'react'
import {Link} from 'react-router-dom'
import './footer.scss'
import  DataSociaMedia from '../../DataSociaMedia.js'

const Footer = props => (
    <footer className="footer-info">
        <div className="footer-info-fila1"> 
            <section className="footer-info-fila1-page bloque">
                <h3> Bienvenido a Hampi </h3>
                <ul>
                    <Link to="/hampi/" style={{textDecoration: "none"}}> 
                        <li><a href="/"> Inicio </a></li>
                    </Link>
                    <Link to="/hampi/Productos" style={{textDecoration: "none"}}> 
                        <li><a href="/">  Productos </a></li>
                    </Link>
                    <Link to="/hampi/Contáctanos" style={{textDecoration: "none"}}> 
                          <li><a href="/"> Contáctanos </a></li>
                    </Link>
                </ul>   
            </section>
            <section className="footer-info-fila1-redes bloque">
                <h3> Síguenos en: </h3>
                    <ul>
                        <li><a href={DataSociaMedia.facebook} target="_blank" rel="noopener noreferrer"> <i class='fa fa-facebook'></i>  -  Facebook</a></li>
                        <li><a href={DataSociaMedia.instagram} target="_blank" rel="noopener noreferrer"> <i class='fa fa-instagram'></i>  -  Instagram</a></li>
                        <li><a href={DataSociaMedia.twitter} target="_blank" rel="noopener noreferrer"> <i class='fa fa-twitter'></i>  -  Twitter</a></li>
                    </ul>   
            </section>
            <section className="footer-info-fila1-colaboraciones bloque">
                <h3> Colaboración con: </h3>
                    <ul>
                        <li>BANDA+CARE</li>
                        <li>DISNACOMPANY</li>
                    </ul>   
            </section>
            <section className="footer-info-fila1-contactanos bloque">
                <h3> Contáctanos: </h3>
                    <ul>
                        <li>  <i class='fa fa-whatsapp'></i> +593983472488</li>
                        <li> <i class='fa fa-home'> </i> Dolores Veintimilla y Remigio Crespo Toral</li>
                        <li> Quito, Ecuador 🇪🇨  </li>
                    </ul>   
            </section>
        </div>
        <div className="footer-info-fila2">
            <section className="footer-info-fila2-copyright">
                <p>© HampiMED 2020  </p>
            </section>
        </div> 
      

    </footer>
)

export default Footer