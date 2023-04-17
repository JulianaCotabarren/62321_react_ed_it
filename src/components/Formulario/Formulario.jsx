import React, {useState, useEffect} from 'react'
import Input from '../../shared/Input'

const Formulario = (props) => {
    /* Defino un estado inicial dinámico */
    const { initialState,inputs,formTitle,onSubmit,showLogin } = props
    const [form,setForm] = useState(initialState) /* Para esto voy a usar el onChange */

    const handleChange = (e) => {
      const {name,value} = e.target;
      setForm({
        ...form,
        [name]:value
      })
    }

    /* Hago un useEffect para forzar un re-render que cambie el estado, ya que cuando hacía el cambio de un formulario a otro se actualizaba la vista pero los datos anteriores quedaban guardados */
    useEffect(() => {
    }, [showLogin])
    

  return (
    <div>
        <form onSubmit={onSubmit ? (e) => onSubmit(e,form) : null}>
            <h1>{formTitle || 'Titulo'}</h1>
            {/* Inputs */}
            {inputs?.map(({name,type,id,placeholder}) => ( /* Destructuro el objeto input */
                <Input 
                  name={name}
                  type={type}
                  key={id}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
            ))}
            {/* <input type="email" />
            <input type="password" /> */}
            <button>Enviar</button>
        </form>   
    </div>
  )
}

export default Formulario