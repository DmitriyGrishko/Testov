import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemsReducer';

export default configureStore({
  reducer: {
    item: itemsReducer,
  },
});
