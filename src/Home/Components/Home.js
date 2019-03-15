import React, { Fragment, Component } from 'react';
import '../Styles/style.scss';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import headerImg from '../Images/hero-1@3x.png';
import toteBagImg from '../Images/totebag.jpg';
import backpackImg from '../Images/backpacks.jpg';
import laptopgirlImg from '../Images/girl-with-laptop.jpg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { withErrorBoundary } from '../../ErrorPage';

function TotoBagComponent() {
    return (
        <div className="tote-container">
            <div className="mx-2 tote-img"><img src={toteBagImg} width="280" height="280"></img></div>
            <div className="mx-3 tote-text">
                <h2 className="bag-heading">Vera Bradley</h2>
                <p className="para-heading">Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed pockets to keep smaller items organized and easy to find.</p>
                <Button variant="primary" bsPrefix="btn-shop">Shop now</Button>
            </div>
        </div>

    );
}

function WowComponent() {
    return (
        <div>
            <p className="wow-heading">wow</p>
            <p className="wow-text"><span className="wow-text-one">Check</span><span className="wow-text-two"><br/>What!</span></p>
            
        </div>
    )
}

function BackPackComponent() {
    return (
        <div>
            <img src={backpackImg} alt="girls-in-jeans" width="300px" height="300px"></img>
        </div>
    )
}

function BottomComponent() {
    return (
        <div className="bottom-container p-5">
            <p className="btm-disc-text">10% Discount for your subscription</p>
            <p className="btm-desc-txt">Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior.</p>
            <Form inline>
                <FormControl type="text" placeholder="Your email here" className="m-2 p-2" bsPrefix="form-control-email" />
                <Button variant="primary" bsPrefix="btn-subscribe">Subscribe</Button>
            </Form>
        </div>
    )
}

function RegisterComponent(){
    return(
        <div>
            <img src={laptopgirlImg} alt="girls-in-jeans" width="100%" height="408"></img>
            <h1 className="register-header">Let the Game begin</h1>
            <h5 className="register-para">Registration is on - get ready for the Open</h5>
            <Button variant="primary" bsPrefix="btn-shop">Register</Button>
        </div>    
    )
}

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="home-container">
                    <div className="home-main"><Image src={headerImg} fluid /></div>
                    <div className="home-second-section"><TotoBagComponent /></div>
                    <div className="home-side-one"><WowComponent /></div>
                    <div className="home-side-two"><BackPackComponent /></div>
                    <div className="home-side-three"><RegisterComponent /></div>
                    <div className="home-bottom-section"><BottomComponent /></div>
                </div>  
            </Fragment>
                )
            }
        }
        
        export default withErrorBoundary(Home);
