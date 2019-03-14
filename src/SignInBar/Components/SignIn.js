import React, { Fragment, Component } from "react";
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class SignInBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSigninModal: false,
            showSignupModal: false,
            validated: false
        };
        this.showSigninModal = this.showSigninModal.bind(this);
        this.showSignupModal = this.showSignupModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(event) {
        console.log('clicked');
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    showSignupModal = () => {
        this.setState({ showSignupModal: true });
    };

    showSigninModal = () => {
        this.setState({ showSigninModal: true });
    };

    handleClose() {
        this.setState({ showSignupModal: false, showSigninModal: false });
    }

    render() {
        let { showSignupModal, showSigninModal, validated } = this.state;
        return (
            <div>
                Hi <a onClick={this.showSigninModal}>Signin</a> or
                    <a onClick={this.showSignupModal}>Register</a>
                <Modal
                    show={showSignupModal}
                    onHide={this.handleClose}
                    dialogClassName="modal-container"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="sign-title">Sign up</Modal.Title>
                    </Modal.Header>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={e => this.handleSubmit(e)}>
                        <Modal.Body>
                            <Form.Group controlId="formBasicEmail" bsPrefix="form-group-input">
                                <Form.Control type="email" required placeholder="Email" bsPrefix="form-control-input"/>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a valid email
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" bsPrefix="form-group-input">
                                <Form.Control type="password" required placeholder="Password" bsPrefix="form-control-input"/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter password
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" bsPrefix="form-group-input">
                                <Form.Control type="password" required placeholder="Retype Password" bsPrefix="form-control-input"/>
                                <Form.Control.Feedback type="invalid">
                                    Passwords are not matching
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer bsPrefix="modal-footer-align">
                            <Button variant="primary" type="submit" bsPrefix="btn-sign">
                                Sign Up
                            </Button>
                            <p className="footer-para">Already a member? <span className="footer-signin">Sign In</span></p>
                            
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default withErrorBoundary(SignInBar);
