const defaultOrdersState = [];

export default (state = defaultOrdersState, action) => {
    switch (action.type) {
        case 'SET_ORDERS':
            return [...state, ...action.orders];
        case 'TOGGLE_SHIPPED_STATUS':
            return state.map((order) => {
                if (order.id === action.id) {
                    return { ...order, shipped: !order.shipped };
                } else {
                    return order;
                }
            });
        default:
            return state;
    }
}