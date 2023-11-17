import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestaurantList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );

    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[2]
    //     .info
    // );
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="container">
        <button
          className="btn"
          onClick={() => {
            filteredResList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
