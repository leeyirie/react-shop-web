import {
  ADD_TO_CART,
  UPDATE_CART_ITEM_QUANTITY,
  REMOVE_FROM_CART,
} from "../../redux/type.js";

// 로컬 스토리지에서 장바구니 데이터 불러오기
const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const initialState = {
  items: savedCartItems, // 초기 상태를 로컬 스토리지 데이터로 설정
};

function cartReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_TO_CART:
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ];
      }

      newState = {
        ...state,
        items: updatedItems,
      };
      break;

    case REMOVE_FROM_CART:
      // 장바구니에서 상품 제거
      newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
      break;

    case UPDATE_CART_ITEM_QUANTITY:
      // 상품 수량 업데이트
      newState = {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
      break;

    case "SET_INITIAL_CART":
      // 초기 장바구니 설정 (필요한 경우)
      newState = {
        ...state,
        items: action.payload,
      };
      break;

    default:
      newState = state;
      break;
  }

  // 로컬 스토리지에 장바구니 데이터 업데이트
  localStorage.setItem("cartItems", JSON.stringify(newState.items));
  return newState;
}

export default cartReducer;
