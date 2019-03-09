import React, { Fragment, Component } from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ErrorPage';

class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='footer-container d-flex'>
                <div className="footer-list">
                    <h2 className="footer-heading">Questions?</h2>
                    <ul>
                        <li className="footer-text">Help</li>
                        <li className="footer-text">Track Order</li>
                        <li className="footer-text">Returns</li>
                    </ul>    
                </div>    
                <div className="footer-list">
                    <h2 className="footer-heading">What's in store</h2>
                    <ul>
                        <li className="footer-text">Women</li>
                        <li className="footer-text">Men</li>
                        <li className="footer-text">Product A-Z</li>
                        <li className="footer-text">But Gift Vouchers</li>
                    </ul>    
                </div>  
                <div className="footer-list">
                    <h2 className="footer-heading">Follow us</h2>
                    <ul>
                        <li className="footer-text">Facebook</li>
                        <li className="footer-text">Twitter</li>
                        <li className="footer-text">YouTube</li>
                    </ul>    
                </div>  
                <div className="footer-list">
                    <p className="footer-text"><i class="fa fa-copyright"></i>2016 shopmate ltd</p>
                </div>  
            </div>    
        )
    }
}

export default withErrorBoundary(Footer);
