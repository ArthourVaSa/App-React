import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { ButtonMenuComp } from '../GlobalComp/ButtonMenuComp'

import './estilos.css'

export const ImagenComp = () => {
  return (
    <>
      <div className='container-fluid' id='div'>
        <Row>
          <Col md={6}></Col>
          <Col md={6} className='column'>
            <Container className='c'>
              <h2>¿Tienes Hambre?</h2>
            </Container>
            <Container className='co'>
              <p>Pide tu comida al alcance de tu celular y te la llevamos a tu casa</p>
            </Container>
            <Container className='con'>
              <Row className='row'>
                <Col md={4} className='col'>
                <p className='parr'>¿Qué esperas?</p>
                </Col>
                <Col md={8} className='col'>
                  <ButtonMenuComp nombre='Ir al Menú'/>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}
