import React, { useState } from 'react'

const Formulario = (props) => {

    const { condicional } = props

    let contenido = null;

    if(condicional) {
        contenido = <div>Aca el condicional es true</div>
    }else{
        contenido = <div>Aca el condicional es false</div>
    }

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    const { email,password } = form;

    const handleChange = (e) => {
        const {value,name} = e.target;
        setForm({
            ...form, //hago una copia del formulario en ese momento para que cuando termine de escribir el email y me mueva para escribir la contraseña el email se mantenga escrito en el formulario y no se borre
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() //para que no recargue la pagina
        console.log(form)
        setForm({
            email:'',
            password:''
        })
    }


  return (
    <div>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection: 'column', width:'40%', margin: '40px auto'}}>
            <h1>Formulario</h1>
            <input onChange={handleChange} value={email} name='email' placeholder='Ingrese el email' type="email" />
            <input onChange={handleChange} value={password} name='password' placeholder='Ingrese la password' type="password" />
            <input type="submit" value="Enviar" />
        </form>
        {contenido}
    </div>
    
  )
}

export default Formulario