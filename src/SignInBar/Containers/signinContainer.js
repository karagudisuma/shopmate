import React, { Fragment, Component } from "react";
import { connect } from 'react-redux'
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import SignUpModal from '../Components/SignUpModal';
import { fetchSignUp } from '../actions';

class SignInContainer extends Component {
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

    handleSubmit(signUpObj) {
        const { dispatch } = this.props
        dispatch(fetchSignUp(signUpObj));
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
            showSigninModal: false,
            validated: false
        });
    }

    render() {
        let { showSignupModal, showSigninModal, validated } = this.state;
        return (
            <div>
                Hi <a onClick={this.showSigninModal}>Signin</a> or
                    <a onClick={this.showSignupModal}>Register</a>
                <SignUpModal handleSubmit={this.handleSubmit}
                    showSignupModal={showSignupModal}
                    handleClose={this.handleClose} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { login } = state;
    const { isFetching } = login;
    return {

        isFetching,

    }
}
export default withErrorBoundary(connect(mapStateToProps)(SignInContainer));
