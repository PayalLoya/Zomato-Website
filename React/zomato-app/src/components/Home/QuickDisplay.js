import { Link } from "react-router-dom";
import "./QuickSearch.css";

const QuickDisplay = (props) => {

  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
          <Link key = {item._id} to = {`/listing/${item.mealtype_id}`} className="listing">
            <div className="card mb-3 meals">
              <div className="row g-0">
                <div className="col-5">
                  <img
                    src={item.meal_image}
                    className="img-fluid meal-img"
                    alt="Breakfast"
                  />
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h5 className="card-title">{item.mealtype}</h5>
                    <p className="card-text">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  return  <div className="d-flex flex-wrap meal-types">{listMeal(props)}</div>
};

export default QuickDisplay;