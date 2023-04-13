import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Formulario from './components/Formulario/Formulario';
import Productos from './views/Productos';
import Navbar from './components/Navbar/Navbar';
function App() {

  const [showForms,setShowForms] = useState(false)
  const [datos,setDatos] = useState({
    nombre:'',
    apellido:'',
    materia:''
  })

  useEffect(() => {

    if(showForms){
      setDatos({
          nombre:'Profe',
          apellido:'Profe',
          materia:'React'
      })
    }
  
    return () => {
      setDatos({
        nombre:'',
        apellido:'',
        materia:''
    })}
  }, [showForms])
  

  return (
    <div className="App text-danger">
      <Navbar navbar_items={["Home", "Link", "Disabled", "Tomas"]}/>
      {/* <Counter initialNumber={5} initialNombre={"Pepe"}/>
      <Counter initialNumber={10} initialNombre={"Juan"}/>
      <Counter initialNumber={50} initialNombre={"Ana"}/> */}
      {/* <Productos/> */}
      <button onClick={() => setShowForms(!showForms)}>{ showForms ? 'Ocultar' : 'Mostrar'}</button>
      {showForms &&
      <>
      <Formulario/>
      <Formulario condicional={true}/>
      </>
      }
      {showForms && (
        <>
          <h1>{datos.nombre}</h1>
          <h1>{datos.apellido}</h1>
          <h1>{datos.materia}</h1>
        </>
      )}
      
    </div>
  );
}

export default App;

/* Jerarquías:
    => App
        -> Navbar
            *NavbarItem
            *SearchBar
            *Dropdown
*/

/* 
  <Navbar 
    navbar_items={home_navbar_items} 
    nombre_logo={'EducacionIT'}
    search_bar={true}
    show_dropdown={true}
    dropdown_name={'Dropdown'}
    dropdown_list={dropdown_list}
  />
*/