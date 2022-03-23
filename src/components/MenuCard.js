import React from "react";
import { ChevronRightRounded } from "@mui/icons-material";

function MenuCard({ img, name, isActive }) {
  return (
    <div className={`rowMenuCard ${isActive ? "active" : ""}`}>
      <div className='imgBox'>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <i className='loadMenu'>
        <ChevronRightRounded />
      </i>
    </div>
  );
}

export default MenuCard;
