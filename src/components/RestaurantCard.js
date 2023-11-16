const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={resData.imgSource} />
      <h1>{resData.hotel}</h1>
      <h3>{resData.cuisines}</h3>
      <p>Rating : {resData.rating}</p>
      <h4>{resData.time}</h4>
    </div>
  );
};

export default RestaurantCard;
