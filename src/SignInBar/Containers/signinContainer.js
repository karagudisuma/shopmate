import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import SignUpModal from '../Components/SignUpModal';
import SignInModal from '../Components/SignInModal';
import { requestSignup, requestSignIn } from '../actions';
import { createStructuredSelector } from 'reselect';
import { signupDataReselect } from '../selectors';

class SignInContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSigninModal: false,
            showSignupModal: false
        };
        this.showSigninModal = this.showSigninModal.bind(this);
        this.showSignupModal = this.showSignupModal.bind(this);
        this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmitSignUp(signUpObj) {
        const { requestSignup } = this.props
        requestSignup(signUpObj);
    }

    handleSubmitSignIn(signInObj){
        this.props.requestSignIn(signInObj);
    }

    showSignupModal = () => {
        this.setState({ showSignupModal: true });
    };

    showSigninModal = () => {
        this.setState({ showSigninModal: true });
    };

    handleClose() {
        this.setState({
            showSignupModal: false,
            showSigninModal: false
        });
    }

    render() {
        let { showSignupModal, showSigninModal } = this.state;
        return (
            <div className="login-container">
                <div>
                Hi! <a  className="tertary-text" onClick={this.showSigninModal}>Signin</a> or
                    <a  className="tertary-text" onClick={this.showSignupModal}>Register</a>
                </div>  
                <div>  
                <ul className="login-bar-list">
                    <li>Daily Deals</li>
                    <li>Sell</li>
                    <li>Help & Contact</li>
                </ul>   
                </div>     
                <SignUpModal handleSubmit={this.handleSubmitSignUp}
                    showSignupModal={showSignupModal}
                    handleClose={this.handleClose} />
                <SignInModal handleSubmit={this.handleSubmitSignIn}
                    showSignupModal={showSigninModal}
                    handleClose={this.handleClose} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        signUpData: state.loginReducer,
        signInData: state.loginReducer
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({ requestSignup, requestSignIn }, dispatch);

export default withErrorBoundary(connect(mapStateToProps, mapDispatchToProps)(SignInContainer));
