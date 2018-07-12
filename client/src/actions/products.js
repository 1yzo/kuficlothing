import database  from '../firebase/firebase';

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});

export const startAddProduct = (product) => {
    return (dispatch) => {
        return database.ref('products').push(product).then(() => {
            dispatch(addProduct(product));
        });
    }
};