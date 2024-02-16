import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../redux/type';

const initialState = {
  wishlistItems: [], // 위시리스트에 담긴 상품 목록
};

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // 위시리스트에 상품 추가 로직
      const existItem = state.wishlistItems.find(item => item.id === action.payload.id);
      if (existItem) {
        return state; // 상품이 이미 위시리스트에 있으면 상태 변경 없이 현재 상태 반환
      }
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      // 위시리스트에서 상품 제거 로직
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
}

export default wishlistReducer;
