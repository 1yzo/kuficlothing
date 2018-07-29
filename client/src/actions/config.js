export const toggleAdmin = (status) => ({
    type: 'TOGGLE_ADMIN',
    status
});

export const toggleCheckout = (status) => ({
    type: 'TOGGLE_CHECKOUT',
    status
});

export const login = (user) => ({
    type: 'LOGIN',
    user
}); 

export const logout = () => ({
    type: 'LOGOUT'
});