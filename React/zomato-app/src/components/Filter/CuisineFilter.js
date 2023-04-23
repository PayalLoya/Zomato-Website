import React, { Component } from "react";
import axios from "axios";
import "./Filter.css";

let url = "https://zomato-api-zi7j.onrender.com/filter";

export default class CuisineFilter extends Component {
  filterCuisine = (event) => {
    let mealId = this.props.mealId;
    let cuisineId = event.target.value;
    let cuisineUrl;

    if (event.target.value === "") {
      cuisineUrl = `${url}/${mealId}`;
    } else {
      cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`;
    }

    axios.get(cuisineUrl).then((res) => {
      this.props.restPerCuisine(res.data);
    });
  };
  render() {
    return (
      <>
        <div className="cuisineFilter">Cuisines</div>
        <div onChange={this.filterCuisine}>
          <label className="radio">
            <input type="checkbox" name="cuisine" value="" className="button" />
            All
          </label>
          <br />
          <label className="radio">
            <input
              type="checkbox"
              name="cuisine"
              value="1"
              className="button"
            />
            North Indian
          </label>
          <br />
          <label className="radio">
            <input
              type="checkbox"
              name="cuisine"
              value="2"
              className="button"
            />
            South Indian
          </label>
          <br />
          <label className="radio">
            <input
              type="checkbox"
              name="cuisine"
              value="3"
              className="button"
            />
            Chinese
          </label>
          <br />
          <label className="radio">
            <input
              type="checkbox"
              name="cuisine"
              value="4"
              className="button"
            />
            Fast Food
          </label>
          <br />
          <label className="radio">
            <input
              type="checkbox"
              name="cuisine"
              value="5"
              className="button"
            />
            Street Food
          </label>
        </div>
      </>
    );
  }
}
