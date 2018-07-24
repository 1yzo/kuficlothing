import database from '../firebase/firebase';

export const setProductStats = (productStats) => ({
    type: 'SET_PRODUCT_STATS',
    productStats
});

export const startSetProductStats = () => {
    return (dispatch) => {
        return database.ref('stats').once('value').then((snapshot) => {
            const productStats = {};
            snapshot.forEach((childSnapshot) => {
                productStats[childSnapshot.key] = { ...childSnapshot.val() }
            });
            dispatch(setProductStats(productStats));
        });
    };
};

export const setVisitorStats = (visitorStats) => ({
    type: 'SET_VISITOR_STATS',
    visitorStats
});

export const startSetVisitorStats = () => {
    return (dispatch) => {
        return database.ref('stats/visitors').once('value').then((snapshot) => {
            const visitorStats = {};
            snapshot.forEach((childSnapshot) => {
                visitorStats[childSnapshot.key] = {
                    count: childSnapshot.val()
                }
            });
            dispatch(setVisitorStats(visitorStats));
        });
    };
};