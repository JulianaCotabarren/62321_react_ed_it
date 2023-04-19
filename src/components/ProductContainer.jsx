import React, {useState,useEffect} from 'react'
import Cart from './Cart/Cart'
import { superheroes } from '../data'

const ProductContainer = () => {



  const [datos, setDatos] = useState(superheroes)
  const [click, setClick] = useState(false)

  useEffect(() => {
    console.log('se cargo el componente');
    return () => {
      console.log('se elimino el componente');
    }
  }, [click])
    

console.log('se ejecuto este consol.log pero el html no cargo');

  return (
    <div>
      {superheroes.map(({id, img, titulo, descripcion, comics}) => (
        <Cart 
          id={id}
          key={id} 
          img={img} 
          title={titulo}
          descripcion={descripcion}
          buttonName={'Mas info'}
          buttonClassName={comics === 'DC' ? 'btn btn-outline-warning' : 'btn btn-danger'}
        />
      ))}
      <button onClick={() => setClick(!click)}>Click</button>
    </div>
  )
}

export default ProductContainer