import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import AppCliente  from './components/REQ1/AppCliente';
import Platos from '../src/components/REQ_5/Platos'
import Confirmacion from '../src/components/REQ_16/Confirmacion'
import Menu from './components/routing-examples/Menu';
import Todos from './components/routing-examples/Todos';
import Carnes from './components/routing-examples/Carnes';
import Mariscos from './components/routing-examples/Mariscos';
import Pastas from './components/routing-examples/Pastas';
import Platos2 from './components/REQ_4/Platos2'
import Car from './components/REQ6/Car'
import Checkout from './components/REQ7/Checkout';
import Pedido from './components/REQ8/Pedido'
import AppRestaurante from './components/REQ9/AppRestaurante'
import Dishes from './components/REQ10/Dishes';
import Realizado from './components/REQ13/Realizado';
import Finish from './components/REQ15/Finish';

const app = () => {
  return (
    <Router>
      <Menu />
      
        <Routes>
          <Route path='/proyectoFinal/' element={<AppCliente />} />
          <Route path='/proyectoFinal/Platos' element={<Platos />} />
          <Route path='/proyectoFinal/Todos' element={<Todos />} />
          <Route path='/proyectoFinal/Carnes' element={<Carnes />} />
          <Route path='/proyectoFinal/Mariscos' element={<Mariscos />} />
          <Route path='/proyectoFinal/Pastas' element={<Pastas />} />
          <Route path='/proyectoFinal/Platos2' element={<Platos2 />} />
          <Route path='/proyectoFinal/Car' element={<Car />} />
          <Route path='/proyectoFinal/Checkout' element={<Checkout />} />
          <Route path='/proyectoFinal/Pedido' element={<Pedido />} />
          <Route path='/proyectoFinal/AppRestaurante' element={<AppRestaurante />} />
          <Route path='/proyectoFinal/Dishes' element={<Dishes />} />
          <Route path='/proyectoFinal/Realizado' element={<Realizado />} />
          <Route path='/proyectoFinal/Finish' element={<Finish />} />
          <Route path='/proyectoFinal/Confirmacion' element={<Confirmacion />} />
          <Route path='/proyectoFinal/AppCliente' element={<AppCliente />} />

          
        </Routes>
      
    </Router>
  )
}

export default app