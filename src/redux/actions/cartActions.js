import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../type.js';

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  payload: { ...product, quantity },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// export const updateCartItemQuantity = (id, quantity) => ({
//     type: UPDATE_CART_ITEM_QUANTITY,
//     payload: { id, quantity },
// });

// 상품 수량 업데이트 액션 크리에이터
export const updateCartItemQuantity = (id, quantity) => (dispatch, getState) => {
  const { cart: { items } } = getState(); // 현재 스토어의 상태에서 장바구니 아이템을 가져옵니다.

  // 장바구니 아이템 중에서 해당 ID를 가진 상품의 수량을 업데이트합니다.
  const updatedItems = items.map(item =>
    item.id === id ? { ...item, quantity } : item
  );

  dispatch({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { id, quantity }
  });

  // 로컬 스토리지도 업데이트합니다.
  localStorage.setItem('cartItems', JSON.stringify(updatedItems));
};

export const setInitialCart = (items) => ({
  type: 'SET_INITIAL_CART',
  payload: items,
});