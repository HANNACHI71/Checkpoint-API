import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
return (
    <header>
    
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/">React-Api</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/UserCard">User</Nav.Link> */}
            <Nav.Link href="/Users">Users</Nav.Link>
            {/* <Nav.Link href="/Profile">Profile</Nav.Link> */}
            {/* <Nav.Link href="/Login">Login</Nav.Link> */}
            <Nav.Link href="/Admin">Admin</Nav.Link>
            
        </Nav>
        </Container>
    </Navbar>








    </header>
)
}

export default NavBar
