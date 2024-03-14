export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    };
};

export const removeFromCart = (index) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: index
    };
};

export const changeQuantity = (index, quantity) => {
    return {
        type: 'CHANGE_QUANTITY',
        payload: {
            index,
            quantity
        }
    };
};