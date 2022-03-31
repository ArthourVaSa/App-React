import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import './estilos.css'
import plato_n from '../../assets/plato_n.png'
import entradas from '../../assets/entradas.png'
import bebidas from '../../assets/bebidas.png'
import plato_s from '../../assets/plato_s.png'
import { getMenu } from '../../helpers/getMenu'

export const GroupButtonsComp = () => {

    const handleTraerMenu = (nombre) => {
        getMenu(nombre);
        console.log('Hice click')
    }

  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={3} xs={12} className='cole' id='imp' onClick={handleTraerMenu}>
                <img
                    id='group'
                    alt=''
                    src={entradas}
                    width='75px'
                    height='75px'
                />
                <p className='platos'>Entradas</p>
            </Col>
            <Col sm={3} xs={12} className='cole' id='par' onClick={handleTraerMenu('mains')}>
                <img
                    id='group'
                    alt=''
                    src={plato_n}
                    width='75px'
                    height='75px'
                />
                <p className='platos'>Principales</p>
            </Col>
            <Col sm={3} xs={12} className='cole' id='imp' onClick={handleTraerMenu('desserts')}>
                <img
                    id='group'
                    alt=''
                    src={plato_s}
                    width='75px'
                    height='75px'
                />
                <p className='platos'>Postres</p>
            </Col>
            <Col sm={3} xs={12} className='cole' id='par' onClick={handleTraerMenu('drinks')}>
                <img
                    id='group'
                    alt=''
                    src={bebidas}
                    width='75px'
                    height='75px'
                />
                <p className='platos'>Bebidas</p>
            </Col>
        </Row>
    </div>
  )
}
