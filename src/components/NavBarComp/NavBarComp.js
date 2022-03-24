import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import './estilos.css'
import logo  from '../../assets/logo.png'
import { ButtonSignInComp } from '../GlobalComp/ButtonSignInComp'

export const NavBarComp = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
          <Navbar.Brand href="#home">
            <img alt='' src={logo} width='30px' height='30px'/>{' '}
            Restaurante
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#somos">¿Quiénes somos?</Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
            <Nav.Item><ButtonSignInComp nombre={"Sign In"}/></Nav.Item>
          </Nav>
          </Container>
        </Navbar>
    </>
  )
}
