import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductContainer from '../components/ProductContainer'
import Container from '../layout/Container'
const Productos = () => {

  const home_navbar_items = ["Home", "Link", "Disabled", "Tomas"]
  const dropdown_list = ["Action", "Another action", "Something else"]

  return (
    <>
      <Navbar 
        navbar_items={home_navbar_items} 
        nombre_logo={'EducacionIT'}
        search_bar={true}
        show_dropdown={true}
        dropdown_name={'Dropdown'}
        dropdown_list={dropdown_list}
      />
    
      <Container dFlex>
        <ProductContainer/>
      </Container>
    </>    
  )
}

export default Productos

