import './App.css';
import Navbar from './components/Navbar/Navbar';
function App() {

  const home_navbar_items = ["Home", "Link", "Disabled", "Tomas"]
  const dropdown_list = ["Action", "Another action", "Something else"]

  return (
    <div className="App text-danger">
      <Navbar 
        navbar_items={home_navbar_items} 
        nombre_logo={'EducacionIT'}
        search_bar={true}
        show_dropdown={true}
        dropdown_name={'Dropdown'}
        dropdown_list={dropdown_list}
      />


    </div>
  );
}

export default App;
