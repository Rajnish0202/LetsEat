import React, { useState, useEffect } from "react";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ItemCard({ img, name, ratings, price, id, data }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currValue, setCurrValue] = useState(Math.floor(ratings));

  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setCurrValue(value);
  };

  const addToCart = (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  return (
    <div className='itemCard' id={id}>
      <div
        className={`isFavourite ${isFavourite ? `active` : ""}`}
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className='imgBox'>
        <img src={img} alt={name} className='itemImg' />
      </div>
      <div className='itemContent'>
        <h3 className='itemName'>{name}</h3>

        <div className='bottom'>
          <div className='ratings'>
            {Array.apply(null, { length: 5 }).map((e, index) => (
              <i
                key={index}
                className={`rating ${currValue > index ? "orange" : "gray"}`}
                onClick={() => handleClick(index + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className='price'>
              <span>$</span>
              {price}
            </h3>
          </div>
          <i className='addToCart' onClick={() => addToCart(data)}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
