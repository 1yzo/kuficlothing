const defaultCartState = {};

export default (state = defaultCartState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            for (let i of [...state, action.item]) {
                if (Object.keys(state).includes(action.item.name)) {
                    state[action.item.name].count++;
                } else {
                    state[action.item.name] = {
                        count: 1,
                        ...action.item
                    }
                } 
            }
            return { ...state };
        case 'REMOVE_ITEM':
            state[action.itemName].count--;
            if (state[action.itemName].count === 0) {
                delete state[action.itemName];
            }
            return {...state};
        case 'CLEAR_ITEMS':
            return {};
        default:
            return state;
    }
};