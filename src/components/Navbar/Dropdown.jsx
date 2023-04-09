import React from 'react'
import NavbarItem from './NavbarItem';

const Dropdown = (props) => {

    const { list_arr, dropdown_name } = props;

  return (
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {dropdown_name}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            { list_arr?.length > 0 && list_arr.map((nombre) => (
                <NavbarItem nombre_item={nombre}/>
            ))}
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
    </li>
  )
}

export default Dropdown