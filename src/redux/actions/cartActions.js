import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../type.js';

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  payload: { ...product, quantity },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const updateCartItemQuantity = (id, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { id, quantity },
});