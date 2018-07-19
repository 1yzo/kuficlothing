const defaultFiltersState = {
    text: '',
    sortBy: 'name'
};

export default (state = defaultFiltersState, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: action.direction
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}