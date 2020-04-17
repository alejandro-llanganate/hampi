import React from 'react'
import Pago from './Componentes/Pago/Pago'
import Item from './Componentes/Item/Item'
import './contentProductos.scss'
import dataProductos from '../Data'
import './Componentes/Filter/filter.scss'
class Content extends React.Component {
    state = {
        mascarillas: true,
        batas: true,
        overall: true,
        cubreCabeza: true,
        cubreZapatos: true,
        gel: true,
        jabon: true
    }

    handleChange = event => {
        const {name, checked} = event.target;
        this.setState({[name]: checked})
    }
   render(){
       let mascarillasProductos;
       let batasProductos;
       let overallProductos;
       let cubreCabezaProductos;
       let cubreZapatosProductos;
       let gelProductos;
       let jabonProductos;

       if(this.state.mascarillas === true){
              mascarillasProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "mascarillas").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} price={producto.precio} img={producto.img}/>));
       }
       if(this.state.batas === true){
             batasProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "batas").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} price={producto.precio} img={producto.img} />));
        }
        if(this.state.overall === true){
            overallProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "overall").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} price={producto.precio} img={producto.img} />));
        }
        if(this.state.cubreCabeza === true){
            cubreCabezaProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "cubre cabeza").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} price={producto.precio} img={producto.img} />));
        }
        if(this.state.cubreZapatos === true){
            cubreZapatosProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "cubre zapatos").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} price={producto.precio} img={producto.img} />));
        }
        if(this.state.gel === true){
            gelProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "gel").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} img={producto.img} price={producto.precio} />));
        }
        if(this.state.jabon === true){
            jabonProductos =  dataProductos.filter( producto => producto.categoria.toLowerCase() === "jabon").map(producto => (<Item key={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} img={producto.img} price={producto.precio} />));
        }
        
       return(
            <div className="productos-content">
                <div className="productos-content-filtro"> 
                   
                    <div className="filter-container">
                        <h2>Filtro</h2>
                        <p>Seleccione lo que desea visualizar:</p>
                        <form>
                            <input onChange={this.handleChange} type="checkbox" id="mascarillas" name="mascarillas" checked={this.state.mascarillas}/><label for="mascarillas"> Mascarillas</label> <br/>
                            <input onChange={this.handleChange} type="checkbox" id="batas" name="batas" checked={this.state.batas}/><label for="batas">Batas</label> <br />
                            <input onChange={this.handleChange} type="checkbox" id="overall" name="overall" checked={this.state.overall}/><label for="overall"> Overall</label> <br />
                            <input onChange={this.handleChange} type="checkbox" id="cubreCabeza" name="cubreCabeza" checked={this.state.cubreCabeza}/><label for="cubreCabeza"> Cubre cabeza</label> <br />
                            <input onChange={this.handleChange} type="checkbox" id="cubreZapatos" name="cubreZapatos" checked={this.state.cubreZapatos}/><label for="cubreZapatos"> Cubre zapatos</label> <br />
                            <input onChange={this.handleChange} type="checkbox" id="gel" name="gel" checked={this.state.gel}/><label for="gel"> Gel</label> <br />
                            <input onChange={this.handleChange} type="checkbox" id="jabon" name="jabon" checked={this.state.jabon}/><label for="jabon"> Jabón </label> <br />
                        </form>
                    </div>
                    
                </div>
    
                <div className="productos-content-items"> 
                
                    {mascarillasProductos}
                    {batasProductos}
                    {overallProductos}
                    {cubreCabezaProductos}
                    {cubreZapatosProductos}
                    {gelProductos}
                    {jabonProductos}

                </div>
                <div className="productos-content-pago"> 
                    <Pago />
                </div>
            </div>
        
       )
   }
}

export default Content