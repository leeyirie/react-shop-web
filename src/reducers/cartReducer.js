import {
  ADD_TO_CART,
  UPDATE_CART_ITEM_QUANTITY,
  REMOVE_FROM_CART,
} from "../redux/type.js";

const initialState = {
  items: [], // 장바구니에 담긴 상품 목록
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        // Product exists, increment quantity
        return {
          ...state,
          items: state.items.map((item, index) =>
            index === existingIndex
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // Product does not exist, add to cart
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: action.payload.quantity || 1 },
          ],
        };
      }
      
    case REMOVE_FROM_CART:
      // 장바구니에서 상품 제거 로직
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
}

export default cartReducer;
