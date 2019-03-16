import { call, put, takeLatest, all } from 'redux-saga/effects';
import { PRODUCTS_LIST_REQUEST, setProducts, resetProducts } from './actions';
import * as url from '../Shared/js/config';

function* productsList(action){
    let { page, limit } = action.data;
    let productUrl = url.allProductsFetchURL(page, limit);
    const productPromise = new Promise((resolve, reject) => {
        fetch(productUrl)
        .then(response => {
            if(response.status === 200){
                return response.json()
            }else{
                console.log(response);
                return null;
            }
        })
        .then(data => resolve(data));
    })
    const productData = yield productPromise;
    if(productData.rows && productData.rows.length > 0){
        yield put(setProducts(productData));
    }
    else{
        yield put(resetProducts(null));
    }
}

function* productsListWatcher() {
    yield takeLatest(PRODUCTS_LIST_REQUEST, productsList);
}

export default function* sagas() {
    yield all([productsListWatcher()]);
}
