import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import {  } from '../actions';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            
        };
        
    }

   

    render() {
        return <div>Dashboard</div>
    }
}

const mapStateToProps = state => {
    return {
        
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withErrorBoundary(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));
