const defaultStatsState = {
    productStats: {},
    visitorStats: {}
};

export default (state = defaultStatsState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_STATS':
            return {
                ...state,
                productStats: { ...action.productStats }
            };
        case 'SET_VISITOR_STATS':
            return {
                ...state,
                visitorStats: { ...action.visitorStats }
            };
        default:
            return state;
    }
}