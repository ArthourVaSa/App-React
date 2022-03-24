import React from 'react'
import {Button} from 'react-bootstrap'

import './estilos.css'

export const ButtonSignInComp = ({nombre}) => {
  return (
    <Button className='btn'>{nombre}</Button>
  )
}
