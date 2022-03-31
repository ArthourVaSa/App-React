import React from 'react'
import { Button } from 'react-bootstrap'
import { getMenu } from '../../helpers/getMenu'

import './estilos.css'

export const ButtonMenuComp = ({nombre}) => {

  return (
    <Button className='btn'>{nombre}</Button>
  )
}
