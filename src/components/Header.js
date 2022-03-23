import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  ShoppingCartRounded,
  SearchRounded,
} from "@mui/icons-material";

function Header() {
  const { qty } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    // console.log(toggleMenu);
    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <div className='logo-container'>
        <h4 className='text'>Let's</h4>
        <h4 className='logo'>Eat</h4>
      </div>

      <div className='inputBox'>
        <SearchRounded className='searchIcon' />
        <input type='text' placeholder='Search' />
      </div>

      <div className='shoppingCart'>
        <ShoppingCartRounded className='cart' />
        <div className='cart_content'>
          <p>{qty}</p>
        </div>
      </div>

      <div className='profileContainer'>
        <div className='imgBox'>
          <img
            src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt=''
            className='profilePic'
          />
        </div>

        <h2 className='userName'>Rajnish Kumar</h2>
      </div>

      <div className='toggleMenu'>
        <BarChart className='toggleIcon' />
      </div>
    </header>
  );
}

export default Header;
