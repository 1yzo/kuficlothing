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
            const stateNext = { ...state };
            stateNext[action.itemName].count--;
            if (stateNext[action.itemName].count === 0) {
                delete stateNext[action.itemName];
            } 
            return stateNext;
        case 'CLEAR_ITEMS':
            return {};
        default:
            return state;
    }
};