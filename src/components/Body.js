import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredResList(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter container">
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

        <div className="search">
          <input
            type="text"
            className="searchInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Enter cafe"
          />
          <button
            className="btn"
            onClick={() => {
              const filterCafe = restaurantList.filter((cafe) =>
                cafe.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filterCafe);
            }}
          >
            search
          </button>
        </div>
      </div>

      <div className="res-container container">
        {filteredResList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
