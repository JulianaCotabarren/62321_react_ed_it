import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import DetailPage from '../pages/DetailPage'
import MainLayoutRoutes from './layout/MainLayoutRoutes'


const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayoutRoutes user={true}/>}>
          {/* Navegación principal */}
          <Route index element={<Home/>}/>
          <Route path='nosotros' element={<Nosotros/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='detail/:id' element={<DetailPage/>}/>

            {/* Acá comienza la navegación de basket, que es hija de  la navegación principal*/}
            <Route 
              path='/basket/' 
              element={<MainLayoutRoutes 
              navbar_items={[
                  {nombre:'Inicio',path:'/basket'},
                  {nombre:'Remeras',path:'/basket/remeras'},
                  {nombre:'Guantes',path:'/basket/guantes'},
                  {nombre:'Pelotas',path:'/basket/pelotas'}
              ]} 
              user={true}
              />}
            >
              <Route index element={<h1>Bienvenido a basket</h1>}/> {/* Esta sería la página de inicio de basket, por eso tiene index */}
              <Route path='remeras' element={<h1>Seccion de Remeras</h1>}/>
              <Route path='guantes' element={<h1>Seccion de Guantes</h1>}/>
              <Route path='pelotas' element={<h1>Seccion de Pelotas</h1>}/>
            </Route>

            {/* Acá comienza la navegación de nfl */}
            <Route 
              path='/nfl/' 
              element={<MainLayoutRoutes 
              navbar_items={[
                  {nombre:'Inicio',path:'/nfl'},
                  {nombre:'Cascos',path:'/nfl/cascos'},
                  {nombre:'Camisetas',path:'/nfl/camisetas'},
                  {nombre:'Pelotas',path:'/nfl/pelotas'}
              ]} 
              user={true}
              />}
            >
              <Route index element={<h1>Bienvenido a NFL</h1>}/> {/* Esta sería la página de inicio de basket, por eso tiene index */}
              <Route path='cascos' element={<h1>Seccion de Cascos</h1>}/>
              <Route path='camisetas' element={<h1>Seccion de Camisetas</h1>}/>
              <Route path='pelotas' element={<h1>Seccion de Pelotas</h1>}/>
            </Route>  
         {/*  <Route path='/futbol/' element={<MainLayoutRoutes user={true}/>}>
            <Route index element={<Home/>}/>
            <Route path='nosotros' element={<Nosotros/>}/>
            <Route path='contacto' element={<Contacto/>}/>
            <Route path='detail/:id' element={<DetailPage/>}/>
          </Route> */}

          
        </Route>          
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas