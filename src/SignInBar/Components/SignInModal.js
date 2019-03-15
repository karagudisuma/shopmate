import React, { Component } from "react";
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            let signInObj = {
                email: form.querySelector('input#formBasicEmail').value,
                password: form.querySelector('input#formBasicPassword').value
            }
            this.props.handleSubmit(signInObj);
        }
        this.setState({ validated: true });
    }

    handleClose() {
        this.setState({ 
            showSignupModal: false, 
            validated: false 
        });
        this.props.handleClose();
    }

    render() {
        let { showSignupModal } = this.props;
        let { validated } = this.state;
        return (
            
                <Modal
                    show={showSignupModal}
                    onHide={this.handleClose}
                    dialogClassName="modal-container"
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="sign-title">Sign In</Modal.Title>
                    </Modal.Header>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={e => this.handleSubmit(e)}>
                        <Modal.Body>
                            <Form.Group controlId="formBasicEmail" bsPrefix="form-group-input">
                                <Form.Control type="email" required placeholder="Email" className="form-control-input"/>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a valid email
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" bsPrefix="form-group-input">
                                <Form.Control type="password" required placeholder="Password" className="form-control-input"/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter password
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer bsPrefix="modal-footer-align">
                            <Button variant="primary" type="submit" bsPrefix="btn-sign">
                                Sign In
                            </Button>
                            <div className="signin-footer">
                            <a className="footer-link">Forgot Password</a><a className="footer-link">Have an account</a>
                            </div>
                        </Modal.Footer>
                    </Form>
                </Modal>
        );
    }
}

export default withErrorBoundary(SignInModal);
