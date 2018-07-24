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