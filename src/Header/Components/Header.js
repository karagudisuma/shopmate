import React, { Fragment, Component } from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ErrorPage';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">SHOPMATE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Women</Nav.Link>
                <Nav.Link href="#link">Men</Nav.Link>
                <Nav.Link href="#home">Kids</Nav.Link>      
                <Nav.Link href="#link">Shoes</Nav.Link>
                <Nav.Link href="#link">Brand</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withErrorBoundary(Header);
