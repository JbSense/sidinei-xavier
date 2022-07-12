import React from 'react'
import './styles.css'

function Input (props) {
  return (
    <div className='Input'>
      <label htmlFor={props.name} className='Input__label'>{props.label}</label>
      <input type={props.type} name={props.name} className='Input__input' />
    </div>
  )
}

export default Input
