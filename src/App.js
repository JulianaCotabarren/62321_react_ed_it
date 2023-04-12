import './App.css';
import Counter from './components/Counter/Counter';
import Productos from './views/Productos';
function App() {

  return (
    <div className="App text-danger">
      <Counter initialNumber={5} initialNombre={"Pepe"}/>
      <Counter initialNumber={10} initialNombre={"Juan"}/>
      <Counter initialNumber={50} initialNombre={"Ana"}/>
      {/* <Productos/> */}
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