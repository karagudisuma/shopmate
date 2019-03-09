import React, { Fragment, Component } from 'react';
import '../Styles/style.scss';
import Image from 'react-bootstrap/Image';
import headerImg from './Images/hero-1@3x.png';
import { withErrorBoundary } from '../../ErrorPage';

class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="home-container">
                <div className="home-main"><Image src={headerImg} fluid />;</div>
                <div className="home-second-section">Vera Bradley</div>
                <div className="home-side-one">Wow</div>
                <div className="home-side-two">Men</div>
                <div className="home-side-three">Register</div>
                <div className="home-bottom-section">Bottom</div>
            </div>    
        )
    }
}

export default withErrorBoundary(Home);
