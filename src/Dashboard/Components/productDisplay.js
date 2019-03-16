import React, { Component } from "react";
import "../Styles/style.scss";
import * as url from '../../Shared/js/config';
import { withErrorBoundary } from "../../ErrorPage";

export const ProductDisplay = (props) => {
    if(props.productsList && props.productsList.rows.length > 0){
        let productsList = props.productsList.rows;
        return (
            <div>
                {
                    productsList.map(product => {
                        let imgURL = url.imageDirURL + product.thumbnail;
                        return(
                            <div className="card-container" key={product.id}>
                                <img src={imgURL} alt="dress design"></img>
                            </div>
                        )    
                    })
                }
            </div>
        )
    }
    else{
        return (
            <div>
                <h3 className="no-product-text">Sorry, we do not have a product matching your request now.</h3>
            </div>
        )    
    }
}

/*
{
                       
            )}
*/