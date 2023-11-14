import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container container-fluid">
        <div className="logo-container">
          <img
            className="logo"
            src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contcat us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = ({ hotel, cuisines, rating, time, imgSource }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={imgSource} />
      <h1>{hotel}</h1>
      <h3>{cuisines}</h3>
      <p>Rating : {rating}</p>
      <h4>{time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container container">
        <RestaurantCard
          hotel="Megana Foods"
          cuisines="south indian, Biryani"
          rating="4.5"
          time="20 min."
          imgSource="https://www.thedeliciouscrescent.com/wp-content/uploads/2019/04/Chicken-Biryani-Square.jpg"
        />

        <RestaurantCard
          hotel="KFC"
          cuisines="chicken wings, Beer"
          rating="3.5"
          time="10 min."
          imgSource="https://images.jdmagicbox.com/comp/mohali/c4/0172px172.x172.220923165644.r2c4/catalogue/kfc-mohali-fried-chicken-restaurants-0zvnbgfdiq.jpg?clr="
        />

        <RestaurantCard
          hotel="Gupta Corner"
          cuisines="Chole Bhature, Raita"
          rating="4.5"
          time="15 min."
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CrBHhXU-rTL4UoUdPGOj3ZCAUYhbUwSjhg&usqp=CAU"
        />

        <RestaurantCard
          hotel="Domino's"
          cuisines="Pizza, Garlic Bread, Cold Drinks"
          rating="2.3"
          time="30 min."
          imgSource="https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg"
        />

        <RestaurantCard
          hotel="Jha Ji Litti chokha"
          cuisines="Litti chokha, Chatney"
          rating="4.8"
          time="25 min."
          imgSource="https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg"
        />

        <RestaurantCard
          hotel="Chinese Corner"
          cuisines="Chawmin, Chilli Potato"
          rating="2.8"
          time="18 min."
          imgSource="https://www.thereciperebel.com/wp-content/uploads/2016/03/chicken-chow-mein-TRR-1200-21-of-31.jpg"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
