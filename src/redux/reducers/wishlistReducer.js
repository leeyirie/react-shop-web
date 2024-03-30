import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../../redux/type.js";

const savedWishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
const initialState = {
  wishlistItems: savedWishlistItems,
};

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // 위시리스트에 상품 추가 로직
      const existItem = state.wishlistItems.find((item) => item.id === action.payload.id);
      if (!existItem) {
        // 상품이 이미 위시리스트에 없으면 새 상태를 반환
        const newState = {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
        localStorage.setItem("wishlistItems", JSON.stringify(newState.wishlistItems));
        return newState;
      }
      // 상품이 이미 위시리스트에 있으면 상태 변경 없이 현재 상태 반환
      return state;

    case REMOVE_FROM_WISHLIST:
      // 위시리스트에서 상품 제거 로직
      const newState = {
        ...state,
        wishlistItems: state.wishlistItems.filter((item) => item.id !== action.payload),
      };
      localStorage.setItem("wishlistItems", JSON.stringify(newState.wishlistItems));
      return newState;

    case "SET_INITIAL_WISHLIST":
      // 초기 위시리스트 설정 로직 (필요한 경우)
      return {
        ...state,
        wishlistItems: action.payload,
      };

    default:
      return state;
  }
}

export default wishlistReducer;
