import React, { Component } from "react";
import axios from "axios";
import "./Listing.css";
import ListingDisplay from "./ListingDisplay";
import CuisineFilter from "../Filter/CuisineFilter";
import CostFilter from "../Filter/CostFilter";

const url = "https://zomato-api-ntso.onrender.com/restaurants?mealId=";

export default class ListingApi extends Component {
  constructor() {
    super();
    this.state = {
      restaurantsList: "",
    };
  }

  setDataFilter = (data) => {
    this.setState({ restaurantsList: data });
  };

  render() {
    return (
      <>
        <section className="container restaurants_list">
          <div className="row">
            <div className="col-5 filterSort">
              <h6 className="filter">Filters</h6>
              <CuisineFilter
                mealId={this.props.match.params.mealId}
                restPerCuisine={(data) => {
                  this.setDataFilter(data);
                }}
              />
              <CostFilter
                mealId={this.props.match.params.mealId}
                restPerCost={(data) => {
                  this.setDataFilter(data);
                }}
              />
            </div>
            <ListingDisplay listData={this.state.restaurantsList} />
          </div>
        </section>
      </>
    );
  }

  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    sessionStorage.setItem("mealId", mealId);
    axios.get(`${url}${mealId}`, { method: "GET" }).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}
