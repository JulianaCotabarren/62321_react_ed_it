import React from 'react'

const Button = (props) => {
    const { className, buttonText, onClick, disabled } = props
  return (
    <button 
        disabled={disabled} 
        onClick={onClick || null} 
        className={`${className || 'btn btn-primary'}`}
    >
        {buttonText || 'Button'}
    </button>
  )
}

export default Button