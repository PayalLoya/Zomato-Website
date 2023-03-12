import React, { Component } from "react";
import "./Search.css";

const lurl = "https://zomato-api-ntso.onrender.com/locations";
const rurl = "https://zomato-api-ntso.onrender.com/restaurants?stateId=";

export default class Search extends Component {
  constructor() {
    super();
    this.state = { 
      locations: "", 
      restaurants: ""
    };
  }

  renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option key={item._id} value={item.state_id}>
            {item.state}
          </option>
        );
      });
    }
  };

  renderRest = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.restaurant_id}>
            {item.restaurant_name}
          </option>
        );
      });
    }
  };

  handleCity = (event) => {
    const stateId = event.target.value;
    fetch(`${rurl}${stateId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurants: data });
        console.log(data);
      });
  };

  render() {
    return (
      <div className="container-fluid" id="back-img">
        <div className="col-12 search">
          <div className="logo text-center">
            <span className="logo-text">e!</span>
          </div>
          <div className="caption text-center">
            Find the best restaurants, cafés, and bars
          </div>
          <div className="search-bars text-center">
            <select onChange={this.handleCity} className="places">
              <option>SELECT CITY</option>
              {this.renderCity(this.state.location)}
            </select>
            <select id="select-style" className="hotels">
              <option>SELECT RESTAURANTS</option>
              {this.renderRest(this.state.restaurants)}
            </select>
          </div>
        </div>
      </div>
    );
  }

  //api calling on page load
  componentDidMount() {
    fetch(lurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
        console.log(data);
      });
  }
}
