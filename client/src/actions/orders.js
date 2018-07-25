import database from '../firebase/firebase';

export const setOrders = (orders) => ({
    type: 'SET_ORDERS',
    orders
});

export const startSetOrders = () => {
    return (dispatch) => {
        return database.ref('orders').once('value').then((snapshot) => {
            const orders = [];
            snapshot.forEach((childSnapshot) => {
                orders.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key
                });
            });
            dispatch(setOrders(orders));
        });
    };
};

export const toggleShippedStatus = (id) => ({
    type: 'TOGGLE_SHIPPED_STATUS',
    id
});

export const startToggleShippedStatus = (id) => {
    return (dispatch) => {
        return database.ref(`orders/${id}/shipped`).transaction((currentShippedStatus) => {
            return !currentShippedStatus;
        }).then(() => dispatch(toggleShippedStatus(id)));
    };
};