import React, {useState,useEffect} from 'react'
import Cart from './Cart/Cart'

const ProductContainer = () => {

  const superheroes = [
    {
      id:1,
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Superman_S_symbol.svg/800px-Superman_S_symbol.svg.png',
      titulo:'Superman',
      descripcion:'DC Super Heroe',
      comics:'DC'
    },
    {
      id:2,
      img:'https://files.cults3d.com/uploaders/13889723/illustration-file/a2933199-76f0-4fa2-a909-4e449e89b1f5/Batman_LOGO_002.jpg',
      titulo:'Batman',
      descripcion:'DC Super Heroe',
      comics:'DC'
    },
    {
      id:3,
      img:'https://businessyield.com/wp-content/uploads/2022/11/iron-man-logo.png',
      titulo:'Ironman',
      descripcion:'Marvel Super Heroe',
      comics:'Marvel'
    }
  ]

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