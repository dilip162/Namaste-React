import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h1>{resData.info.name}</h1>
      <h3 className="cuisine">{resData.info.cuisines[0]}</h3>
      <p className="rating">Rating : {resData.info.avgRatingString}</p>
      <h4 className="deliTime">{resData.info.sla.deliveryTime}min.</h4>
    </div>
  );
};

export default RestaurantCard;
