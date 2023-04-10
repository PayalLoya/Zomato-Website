import React, { Component } from "react";
import OrderDisplay from "../Booking/OrderDisplay";
import axios from "axios";

const url = "https://zomato-api-zi7j.onrender.com";

export default class ViewOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: "",
    };
  }

  render() {
    return (
      <div>
        <OrderDisplay orderData={this.state.orders} />
      </div>
    );
  }

  componentDidMount() {
    let email = sessionStorage.getItem("userInfo")
      ? sessionStorage.getItem("userInfo").split(",")[1]
      : [];
    axios.get(`${url}/orders?email=${email}`).then((res) => {
      this.setState({ orders: res.data });
    });
  }
}
