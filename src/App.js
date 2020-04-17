import React, {Component} from 'react';
import BarraMenu from './componentes/BarraMenu/BarraMenu'
import CajaLateral from './componentes/CajaLateral/CajaLateral'
import FondoPage from './componentes/Fondo/FondoPage'
import Inicio from './inicio/Inicio'
import Footer from './componentes/Footer/Footer'
import Productos from './Productos/Productos'
import Contactanos from './Contactanos/Contactanos'
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
class App extends Component{
  constructor(){
    super();
    this.state = {
      cajaLateralAbierta: false,
      scrolled: false
    }
    this.botonMenuResponsiveClic = this.botonMenuResponsiveClic.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500 
      if(isTop){
        this.setState({scrolled: false})
      }else{
        this.setState({scrolled: true})
      }
      console.log(this.state.scrolled)
    })
  }

  botonMenuResponsiveClic = () => {
        this.setState(prevState =>  { 
         return {cajaLateralAbierta: !prevState.cajaLateralAbierta}
     } 
    )
  }

  botonCerrarSlideMenu = () => {
    this.setState({cajaLateralAbierta: !this.state.cajaLateralAbierta})
  }


  render(){
    let fondoPage;
    if(this.state.cajaLateralAbierta){
      fondoPage = <FondoPage />
    }
    return (
      <Router>
        <div className="App" style={{height: '100px'}}>
        <BarraMenu botonClic={this.botonMenuResponsiveClic} scrolled={this.state.scrolled}/>
        <CajaLateral cerrarClic = {this.botonCerrarSlideMenu} clicEstado = {this.state.cajaLateralAbierta}/>
        {fondoPage} 
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/Productos" component={Productos} />
            <Route path="/Contáctanos" component={Contactanos} />
          </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
