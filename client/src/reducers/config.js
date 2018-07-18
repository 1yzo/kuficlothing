const defaultConfigState = {
    isAdminPage: false,
    checkoutErrorCount: 0
};

export default (state = defaultConfigState, action) => {
    switch (action.type) {
        case 'TOGGLE_ADMIN':
            return {
                ...state,
                isAdminPage: action.status
            };
        case 'TOGGLE_CHECKOUT':
           if (action.status) {
               return {
                   ...state,
                   checkoutErrorCount: state.checkoutErrorCount + 1
               }
           } else {
               return {
                   ...state,
                   checkoutErrorCount: state.checkoutErrorCount - 1
               }
           }
        default:
            return state;
    }
};