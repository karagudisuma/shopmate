import React, { Fragment, Component } from 'react';
import '../Styles/style.scss';
import { withErrorBoundary } from '../../ErrorPage';

class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>Adding</p>
            </div>    
        )
    }
}

export default withErrorBoundary(Home);
