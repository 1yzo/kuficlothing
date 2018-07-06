const defaultProductsReducer = [];

export default (state = defaultProductsReducer, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return [...state, ...action.products];
        default:
            return state;
    }
};