import React from 'react'
import { Button } from 'react-bootstrap'

import './estilos.css'

export const ButtonMenuComp = ({nombre}) => {
  return (
    <Button className='btn'>{nombre}</Button>
  )
}
