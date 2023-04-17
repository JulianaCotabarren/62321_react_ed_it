import React from 'react'

const Input = (props) => {

  /* Defino por destructuración de las props los atributos del componente input */
    const { 
        type,
        placeholder,
        name,
        className,
        id,
        onChange,
        onBlur
     } = props

  return (
    /* Paso los valores de cada atributo y doy una segunda opción para que no salte undefined en el caso de que alguno de los atributos no se pase */
    <input 
        type={type || 'text'}
        placeholder={placeholder || null}
        name={name || null}
        className={className || null}
        id={id || null}
        onChange={onChange || null}
        onBlur={onBlur || null}
    />
    

  )
}

export default Input