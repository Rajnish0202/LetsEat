import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// const middleware = [];

const initialStore = {
  cartReducer: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) ?? [],
  },
};

const store = createStore(rootReducer, initialStore, applyMiddleware());

export default store;
