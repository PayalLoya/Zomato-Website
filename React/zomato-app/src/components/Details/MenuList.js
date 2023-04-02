import React, { Component } from "react";
import { PlusSquare, DashSquare } from "react-bootstrap-icons";
import "./Detail.css";

export default class MenuList extends Component {
  orderId = [];

  placeOrder = (id) => {
    this.orderId.push(id);
    this.props.finalOrder(this.orderId);
  };

  removeOrder = (id) => {
    if (this.orderId.indexOf(id) > -1) {
      this.orderId.splice(this.orderId.indexOf(id), 1);
    }
    this.props.finalOrder(this.orderId);
  };

  renderCart = (orders) => {
    if (orders) {
      return orders.map((item, index) => {
        return <b key={index}>{item}</b>;
      });
    }
  };

  renderMenu = ({ menuData }) => {
    if (menuData) {
      return menuData.map((item) => {
        return (
          <>
            <div key={item.menu_id} className="d-flex flex-wrap items">
              <div>
                <b className="id">{item.menu_id}</b>
                <img src={item.menu_image} alt="" className="menuImg" />
              </div>
              <div className="description">
                <h5>
                  {item.menu_name} - <b>Rs. {item.menu_price}</b>
                </h5>

                <div className="buttons">
                  <PlusSquare  className="plus"
                    onClick={() => {
                      this.placeOrder(item.menu_id);
                    }}
                  />
                  <DashSquare className="minus"
                    onClick={() => {
                      this.removeOrder(item.menu_id);
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <h3>Menu</h3>
          <h5>Item Numbers {this.renderCart(this.orderId)}Added</h5>
        </div>
        <hr />
        <div className="menuBody">{this.renderMenu(this.props)}</div>
      </>
    );
  }
}
