import React, { Component } from "react";
import axios from "axios";
import "./Filter.css";

const url = "https://zomato-api-ntso.onrender.com/filter";

export default class CostFilter extends Component {
  filterCost = (event) => {
    let mealId = this.props.mealId;
    let cost = event.target.value.split("-");
    let lcost = cost[0];
    let hcost = cost[1];
    let costUrl;

    if (event.target.value === "") {
      costUrl = `${url}/${mealId}`;
    } else {
      costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
    }
    
    axios.get(costUrl).then((res) => {
      this.props.restPerCost(res.data);
    });
  };

  render() {
    return (
      <>
        <div className="costFilter">Cost</div>
        <div onChange={this.filterCost}>
          <label className="radio">
            <input type="radio" name="cuisine" value="" className="button" />
            All
          </label><br/>
          <label className="radio">
            <input type="radio" name="cuisine" value="100-300"  className="button"/>
            100 - 300
          </label><br/>
          <label className="radio">
            <input type="radio" name="cuisine" value="301-500"  className="button"/>
            301 - 500
          </label><br/>
          <label className="radio">
            <input type="radio" name="cuisine" value="501-800"  className="button"/>
            501 - 800
          </label><br/>
          <label className="radio">
            <input type="radio" name="cuisine" value="801-1000"  className="button"/>
            801 - 1000
          </label><br/>
          <label className="radio">
            <input type="radio" name="cuisine" value="1001-1200"  className="button"/>
            1001 - 1200
          </label><br/>
          <label className="radio">
            <input type="radio" name="cuisine" value="1201-2000"  className="button"/>
            1201 - 2000
          </label>
        </div>
      </>
    );
  }
}