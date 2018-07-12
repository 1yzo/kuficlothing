const defaultProductsReducer = [];

export default (state = defaultProductsReducer, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product];
        case 'SET_PRODUCTS':
            return [...state, ...action.products];
        default:
            return state;
    }
};