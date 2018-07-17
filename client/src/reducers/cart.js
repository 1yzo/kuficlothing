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
            let stateNext = { ...state };

            let itemNext = { ...state[action.itemName] };
            itemNext.count--;
            stateNext[action.itemName] = itemNext;
            
            if (stateNext[action.itemName].count <= 0) {
                delete stateNext[action.itemName];
            } 
            return stateNext;
        case 'SET_COUNT':
            const stateNext_setCount = { ...state };
            const itemNext_SetCount = { ...state[action.itemName], count: action.count };
            stateNext_setCount[action.itemName] = itemNext_SetCount;
            return stateNext_setCount;
        case 'CLEAR_ITEMS':
            return {};
        case 'CLEAR_ITEM':
            const stateNext_clearItem = { ...state };
            delete stateNext_clearItem[action.itemName];
            return stateNext_clearItem;
        default:
            return state;
    }
};