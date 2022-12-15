import { ADD_ITEM } from '../type';

export const addItem = (payload) => ({ type: ADD_ITEM, payload });

export const addItemThunk = (payload) => (dispatch) => {
  dispatch(addItem(payload));
};
