import React from 'react'

const Button = ({label, clickHandler, index}) => {
  return (
    <button onClick={(e) => clickHandler(e, index)}>{label}</button>
  )
}

export default Button