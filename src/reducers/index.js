import { combineReducers } from 'redux';
import cartReducer from './cartReducer.js'; // 장바구니 리듀서 예시
import wishlistReducer from './wishlistReducer.js';

const rootReducer = combineReducers({
  cart: cartReducer,
  // user: userReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;