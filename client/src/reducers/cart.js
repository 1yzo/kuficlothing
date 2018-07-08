const defaultCartState = [];

export default (state = defaultCartState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        default:
            return state;
    }
};