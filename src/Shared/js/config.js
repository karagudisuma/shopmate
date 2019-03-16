export const rootURL  = 'https://backendapi.turing.com/';

export const imageDirURL = "https://backendapi.turing.com/images/products/"

export const signupURL = rootURL + 'customers';

export const allProductsFetchURL = (page, limit) => {
    return rootURL + 'products?page=' + page + '&limit=' + limit;
}    