import React from 'react'
import NavbarItem from './NavbarItem'
import Searchbar from './Searchbar'
import Dropdown from './Dropdown'

const Navbar = (props) => {

  const { nombre_logo, navbar_items, search_bar, show_dropdown, dropdown_list, dropdown_name } = props

  //const NavbarLogoText = "EducacionIT"

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{nombre_logo}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {navbar_items.map((nombre) => (
          <NavbarItem nombre_item={nombre}/> 
          
        ))}

        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
        
        {show_dropdown && <Dropdown dropdown_name={dropdown_name} list_arr={dropdown_list}/>}

      </ul>
      {
        search_bar ? <Searchbar/> : null //este código se puede mejorar poniéndolo de esta forma: search_bar && <Searchbar/>
      }
      
    </div>
  </div>
</nav>
  )
}

export default Navbar