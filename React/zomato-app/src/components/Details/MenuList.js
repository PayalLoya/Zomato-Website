import React, { Component } from "react";
import FontAwesome from 'react-fontawesome';
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
                <span>
                  {item.menu_name} - <b>Rs. {item.menu_price}</b>
                </span>

                <div className="buttons">
                  <button
                    className="btn btn-success plus"
                    onClick={() => {
                      this.placeOrder(item.menu_id);
                    }}
                  >
                  </button>
                  <button
                    className="btn btn-danger minus"
                    onClick={() => {
                      this.removeOrder(item.menu_id);
                    }}
                  >
                    <span className="glyphicon glyphicon-minus"></span>
                  </button>
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
        <hr/>
        <div className="menuBody">{this.renderMenu(this.props)}</div>
        </>
    );
  }
}
