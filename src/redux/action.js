import * as types from "./actionType";

export const addToCart = () => ({
  type: types.ADD_TO_CART,
});

export const getCartTotal = () => ({
  type: types.GET_TOTALS,
});

export const removeItem = (id) => ({
  type: types.REMOVE,
});

export const increase = (id) => ({
  type: types.INCREASE,
  payload: id,
});

export const decrease = (id) => ({
  type: types.DECREASE,
  payload: id,
});
