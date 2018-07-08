export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item
});

export const clearItems = () => ({
    type: 'CLEAR_ITEMS'
});

export const removeItem = (item) => ({
    type: 'REMOVE_ITEM',
    itemName: item.name
});