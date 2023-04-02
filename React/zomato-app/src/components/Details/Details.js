import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuList from "./MenuList";
import "./Detail.css";

const url = "https://zomato-api-ntso.onrender.com";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: "",
      menuList: "",
      userItem: "",
      mealId: sessionStorage.getItem("mealId"),
    };
  }

  addToCart = (data) => {
    this.setState({ userItem: data });
  };

  proceed = () => {
    sessionStorage.setItem("menu", this.state.userItem);
    this.props.history.push(
      `/placeOrder/${this.state.details.restaurant_name}`
    );
  };

  render() {
    let { details } = this.state;
    return (
      <>
        <div className="container restDetails d-flex flex-wrap">
          <div className="rest-image">
            <img
              src={details.restaurant_thumb}
              alt="rest-img"
              className="img-fluid restImg"
            />
          </div>
          <div className="contentDiv">
            <h3 className="restName">{details.restaurant_name}</h3>
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Contact</Tab>
              </TabList>
              <TabPanel>
                <h6>Average Cost</h6>
                <p>₹900 for two people (approx.)</p>
                <h6>Average Rating</h6>
                <p>{details.rating_text}</p>
              </TabPanel>
              <TabPanel>
                <h6>Phone Number</h6>
                <p>{details.contact_number}</p>
                <h6>Address</h6>
                <p>{details.address}</p>
              </TabPanel>
            </Tabs>
            <div className="diffPage">
              <Link
                to={`/listing/${this.state.mealId}`}
                className="btn btn-danger"
              >
                BACK
              </Link>
              <button
                className="btn btn-success proceed"
                onClick={this.proceed}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
        <div className="container MenuList">
          <MenuList
            menuData={this.state.menuList}
            finalOrder={(data) => {
              this.addToCart(data);
            }}
          />
        </div>
      </>
    );
  }

  //async await
  async componentDidMount() {
    let restId = this.props.location.search.split("=")[1];
    let response = await axios.get(`${url}/details/${restId}`, {
      method: "GET",
    });
    let menuData = await axios.get(`${url}/menu/${restId}`, { method: "GET" });
    this.setState({ details: response.data[0], menuList: menuData.data });
  }
}
