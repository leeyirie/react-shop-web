import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../type.js';

export const addToWishlist = product => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = productId => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});

export const setInitialWishlist = (items) => ({
  type: 'SET_INITIAL_WISHLIST',
  payload: items,
});