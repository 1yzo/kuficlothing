import database  from '../firebase/firebase';

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

export const startSetProducts = () => {
    return (dispatch) => {
        return database.ref('products').once('value').then((snapshot) => {
            const products = [];
            snapshot.forEach((childSnapshot) => {
                products.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key
                });
            });
            dispatch(setProducts(products));
        });
    }
}

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