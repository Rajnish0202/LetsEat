import React, { useEffect } from "react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";

function CartItems({ image, name, price, item, qty }) {
  const { cartItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // console.log(qty);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch({ type: "REMOVE", payload: item });
  };

  const increase = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };

  const decrease = (item) => {
    dispatch({ type: "DECREASE", payload: item });
  };

  return (
    <div className='cardItem'>
      <div className='imgBox'>
        <img src={image} alt={name} />
      </div>
      <div className='itemSection'>
        <h2 className='itemName'>{name}</h2>
        <div className='itemQuantity'>
          <span>x {qty}</span>
          <div className='quantity'>
            <RemoveRounded
              className='itemRemove'
              onClick={() => decrease(item)}
            />
            <AddRounded className='itemAdd' onClick={() => increase(item)} />
          </div>
        </div>
      </div>
      <div className='trashBox' onClick={() => removeItem(item)}>
        <DeleteIcon className='trash' />
      </div>
      <p className='itemPrice'>
        <span className='dolorSign'>$</span>
        <span className='itemPriceValue'>{price}</span>
      </p>
    </div>
  );
}

export default CartItems;
