import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import './ChecksBox.css'

export const RememberAccountCheckBox = () => {
  return (
    <div className='rememberAccountCheckBoxContainer'>
        <input className='rememberAccountCheck' type='checkbox' />
        <p className='rememberAccountText'>Recordar mi cuenta</p>
    </div>
  )
}
