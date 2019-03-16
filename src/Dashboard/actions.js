import axios from "axios";
import * as api from '../Shared/js/config';

export const PRODUCTS_LIST_REQUEST = "PRODUCTS_LIST_REQUEST";
export const PRODUCTS_LIST_RESPONSE = "PRODUCTS_LIST_RESPONSE";
export const PRODUCTS_LIST_FAILURE = "PRODUCTS_LIST_FAILURE";

export const getProducts = (page, limit) => {
    return {
        type: PRODUCTS_LIST_REQUEST,
        data: {
            page: page,
            limit: limit
        }
    };
}

export const setProducts = (productList) => {
    return {
        type: PRODUCTS_LIST_RESPONSE,
        data: productList
    };
}

export const resetProducts = () => {
    return {
        type: PRODUCTS_LIST_FAILURE
    }
}