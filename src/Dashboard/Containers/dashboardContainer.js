import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "../Styles/style.scss";
import { withErrorBoundary } from "../../ErrorPage";
import { getProducts } from '../actions';
import { DashboardMenuWomen, ProductDisplay } from '../Components';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            productsList: props.productsList
        };
        
    }

    componentDidMount(){
        this.props.getProducts(1, 9);
    }

    componentDidUpdate(prevProps) {
        if (this.props.productsList !== prevProps.productsList) {
            this.setState({productsList : this.props.productsList});
        }
    }

    render() {
        let { productsList } = this.state;
        return (
            <div>
                <DashboardMenuWomen />
                <Container>   
                    <Row>
                        <Col xs={2}>Filter</Col>
                        <Col md="auto"><ProductDisplay productsList={ productsList } /></Col>
                    </Row>
                </Container>
            </div>
        );       
    }
}

const mapStateToProps = state => {
    return {
        productsList: state.productsReducer.productsList
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({ getProducts }, dispatch);

export default withErrorBoundary(connect(mapStateToProps, mapDispatchToProps)(DashboardContainer));