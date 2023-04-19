import React, { useEffect, useState } from 'react'
import CardDetail from '../components/Cart/CardDetail'
import { useParams,useSearchParams } from 'react-router-dom'
import { superheroes } from '../data'
import Spinner from '../shared/Spinner/Spinner'

const DetailPage = () => {

  const [loading,setLoading] = useState(false);
  const [superheroe,setSuperheroe] = useState(null);
  const [searchParams,setSearchParams] = useSearchParams();
  console.log(searchParams);
  const { id } = useParams()

  const findSuperheroe = () => {
    const result = superheroes.find((item) => item.id === id)
    console.log(result);
    if(result){
      setSuperheroe(result)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {findSuperheroe()},3000)
  
  }, [])
  

  return(
    <>
    {loading && <Spinner/>}
    {!loading && !superheroe && <h1>El articulo no existe</h1>}
    {!loading && superheroe && <CardDetail img={superheroe.img} nombre={superheroe.titulo}/>}
    </>
  )
/*   const superheroe = superheroes.find((item) => item.id === id)

  if(superheroe){
    return (
      <div>
          <CardDetail
            img={superheroe.img}
            nombre={superheroe.titulo}
          />
      </div>
  )} else {
    return(
      <div>
        <h1>El artículo no existe</h1>
      </div>
    )} */

  
}

export default DetailPage
