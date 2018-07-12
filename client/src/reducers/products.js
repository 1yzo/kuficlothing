const defaultProductsReducer = [];

export default (state = defaultProductsReducer, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product];
        case 'SET_PRODUCTS':
            return [...state, ...action.products];
        case 'REMOVE_PRODUCT':
            return state.filter((product) => product.id !== action.id);
        case 'EDIT_PRODUCT':
            return state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        ...action.edits
                    }; 
                } else {
                    return product;
                }
            });
        default:
            return state;
    }
};