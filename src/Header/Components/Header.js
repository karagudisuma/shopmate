import React, { Fragment, Component } from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ErrorPage';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignInBar from '../../SignInBar';

class Header extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("clicked");
    }

    render() {
        return (
            <Fragment>
            <SignInBar.containers.SigninBar />
            <Navbar className="dark" bg="dark" expand="lg" variant="dark">
            <Navbar.Brand className="logo">SHOPMATE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-fill w-100">
                <Nav.Link onClick={this.handleClick}>Women</Nav.Link>
                <Nav.Link>Men</Nav.Link>
                <Nav.Link>Kids</Nav.Link>      
                <Nav.Link>Shoes</Nav.Link>
                <Nav.Link>Brand</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search Anything" className="mr-2 pl-2" bsPrefix="form-control-search"/>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            </Fragment>
        )
    }
}

export default withErrorBoundary(Header);
