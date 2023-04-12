import React from 'react'

const Container = (props) => {
    const { fullWidth, children, dFlex } = props
  return (
    <div className={`${fullWidth ? 'container-fluid' : 'container'} ${dFlex ? 'd-flex justify-content-between' : '' }`}>
       {children} 
    </div>
  )
}

export default Container