import * as types from "./actionType";

const inititalState = {
  cartItems: [],
  qty: 0,
  total: 0,
};

export const cartReducer = (state = inititalState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!exist) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        let tempCart = state.cartItems.map((cartItem) => {
          return {
            ...cartItem,
          };
          // return cartItem;
        });
        return {
          ...state,
          cartItems: tempCart,
        };
      }

    case types.INCREASE:
      let tempCartInc = state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            qty: cartItem.qty + 1,
          };
        }
        return cartItem;
      });
      return { ...state, cartItems: tempCartInc };

    case types.REMOVE:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((obj) => obj.id !== action.payload.id),
        ],
      };

    case types.DECREASE:
      let tempCartDec = state.cartItems
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.qty !== 0);
      return { ...state, cartItems: tempCartDec };

    case types.GET_TOTALS:
      let { qty, total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.qty += qty;
          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, qty };

    default:
      return state;
  }
};
