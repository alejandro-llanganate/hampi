import React from 'react'
import './inicioHeader.scss'
import modelo from './modelohampi1.png'

const Header = props => (

    <div className="inicio-header">
        <div className="inicio-header-fondo">
        </div>
        <div className="inicio-header-contenido">
            <img className="inicio-header-contenido-mujerMascarilla"
            src={modelo}
            alt="mujer con mascarilla"
            />
            <div className="inicio-header-contenido-descripcion"> 
                <div className="inicio-header-contenido-box">
                    <h1> PRODUCTOS DE SEGURIDAD SANITARIA  <span role="img">😷 </span> </h1>
                    <p> Disponemos de las mejores mascarillas, batas, overall, cubre cabeza, cubre zapatos, gel, jabón, pruebas para COVID-19 con certificación y productos de limpieza. </p>
                </div>
                <div className="inicio-header-contenido-box">
                    <h1> VENTAS AL POR MAYOR </h1>
                    <p>Para enfrentar la situación actual te ofrecemos alternativas de productos de calidad para la protección de quienes conforman tu empresa, institución o incluso tu hogar.</p>
                    </div>
            </div>
      </div>
    </div>

)

export default Header