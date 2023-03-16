import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="container col-7 item" key={item.restaurant_id}>
              <div className="row restaurants">
                <div className="col-4">
                  <img
                    className="image"
                    src={item.restaurant_thumb}
                    alt={item.restaurant_name}
                  />
                </div>
                <div className="col-8 details">
                  <div className="hotel-name">
                    <Link
                      to={`/details?restId=${item.restaurant_id}`}
                      className="link"
                    >
                      {" "}
                      {item.restaurant_name}
                    </Link>
                  </div>
                  <div className="city-name">{item.address}</div>
                  <div className="city-name">Rating: {item.average_rating}</div>
                  <div className="city-name">Rs. {item.cost}</div>
                  <div className="labelDiv">
                    <div className="category">Meals</div>
                    <span className="badge bg-primary">
                      {item.mealTypes[0].mealtype_name}
                    </span>
                    <span className="badge bg-danger">
                      {item.mealTypes[1].mealtype_name}
                    </span>
                  </div>
                  <div className="labelDiv">
                    <div className="category">Cuisines</div>
                    <span className="badge bg-success">
                      {item.cuisines[0].cuisine_name}
                    </span>
                    <span className="badge bg-warning text-dark">
                      {item.cuisines[1].cuisine_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div>
            <h1>No data </h1>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
  };

  return <div id="content">{renderData(props)}</div>;
};

export default ListingDisplay;
