const defaultConfigState = {
    isAdminPage: false
};

export default (state = defaultConfigState, action) => {
    switch (action.type) {
        case 'TOGGLE_ADMIN':
            return {
                ...state,
                isAdminPage: action.status
            };
        default:
            return state;
    }
};