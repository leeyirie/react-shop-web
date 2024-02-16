import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/index.js'; // 상대 경로 확인

const store = configureStore({
  reducer: rootReducer,
});

export default store;
