import React from 'react'
import './styles.css'

function Input (props) {
  // const overFocus = () => {
  //   document.querySelector('.Input').classList.add('focus')
  // }

  // const outFocus = () => {
  //   document.querySelector('.Input').classList.remove('focus')
  // }

  return (
    <div className='Input'>
      <input type={props.type} name={props.name} className='Input__input' required />
      <label htmlFor={props.name} className='Input__label'>{props.label}</label>
    </div>
  )
}

export default Input
