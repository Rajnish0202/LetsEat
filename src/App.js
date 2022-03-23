import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import BannerName from "./components/BannerName";
import SubMenuContainer from "./components/SubMenuContainer";
import MenuCard from "./components/MenuCard";

import { MenuItems, Items } from "./components/data";
import ItemCard from "./components/ItemCard";
import DebitCard from "./components/DebitCard";
import CartItems from "./components/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "./redux/action";

function App() {
  // Main Dish State
  const [isMainData, setIsMainData] = useState(
    Items.filter((item) => item.itemId === "buger01")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    // console.log(menuLi);

    function setMenuActive() {
      // List Menu Active Toggle
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // MenuCard Active Toggle
    const menuCard = document.querySelectorAll(".rowContainer .rowMenuCard");
    // console.log(menuCard);

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);

  // Set main dish items on filter
  const setData = (itemId) => {
    setIsMainData(Items.filter((item) => item.itemId === itemId));
  };

  // cartItems

  const { cartItems, total } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  return (
    <div className='App'>
      {/* Header */}
      <Header />

      {/* Main Container */}

      <main>
        <div className='mainContainer'>
          <div className='banner'>
            <BannerName name={"Rajnish"} discount={"20"} link={"#"} />
            <img
              src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337'
              alt=''
              className='deliveryPic'
            />
          </div>

          {/* DishContainer */}

          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"} />
            </div>

            <div className='rowContainer'>
              {MenuItems &&
                MenuItems.map((card, index) => (
                  <div key={index} onClick={() => setData(card.itemId)}>
                    <MenuCard
                      img={card.imgSrc}
                      name={card.name}
                      isActive={card.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className='dishItemContainer'>
              {isMainData &&
                isMainData.map((data, index) => (
                  <ItemCard
                    key={index}
                    img={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                    id={data.id}
                    data={data}
                  />
                ))}
            </div>
          </div>

          <div className='rightMenu'>
            <div className='debitCardContainer'>
              <div className='debitCard'>
                <DebitCard />
              </div>
            </div>

            <div className='cartCheckOutContainer'>
              <div className='cartContainer'>
                <SubMenuContainer name={"Carts Items"} />
                {/* Cart Item */}

                <div className='cartItems'>
                  {cartItems.map((item, index) => {
                    // console.log(item);
                    return (
                      <CartItems
                        key={index}
                        name={item.name}
                        image={item.imgSrc}
                        price={item.price}
                        qty={item.qty}
                        item={item}
                      />
                    );
                  })}
                </div>
              </div>
              <div className='totalSection'>
                <h3>Total</h3>
                <p>
                  <span>$ </span>
                  {total}
                </p>
              </div>
              <button className='checkOut'>Check Out</button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Menu */}
      <div className='bottomMenu'>
        <ul id='menu'>
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
