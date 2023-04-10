import React, { Component } from "react";
import QuickDisplay from "../Home/QuickDisplay";

const qurl = "https://zomato-api-zi7j.onrender.com/quickSearch";

export default class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }

  render() {
    return (
      <div className="container col-md-12 col-sm-6 col-8 col quick-search">
        <div className="search-title">Quick Searches</div>
        <div classMName="search-description">
          Discover restaurants by type of meal
        </div>
        <QuickDisplay mealData={this.state.mealType} />
      </div>
    );
  }

  //api calling on page load
  componentDidMount() {
    fetch(qurl, {method: "GET"})
    .then((res) => res.json())
    .then((data) => {
        this.setState({mealType: data});
        console.log(data);
    });
  }
}
