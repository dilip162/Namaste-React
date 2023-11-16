import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="container">
        <button
          className="btn"
          onClick={() => {
            filteredResList = restaurantList.filter((res) => res.rating > 4);
            setRestaurantList(filteredResList);
            console.log(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
