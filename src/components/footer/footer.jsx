import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'


const footer = () => {
  return (
    <>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Síguenos en nuestras redes sociales y recibe increíbles descuentos</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Made by: <a href="#login">Rebecca AlMe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default footer