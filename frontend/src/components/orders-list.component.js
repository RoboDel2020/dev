import React, { Component } from "react";
import OrderDataService from "../services/order.service";
import { Link } from "react-router-dom";
export default class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCustomerID = this.onChangeSearchCustomerID.bind(this);
    this.retrieveOrders = this.retrieveOrders.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveOrder = this.setActiveOrder.bind(this);
    this.removeAllOrders = this.removeAllOrders.bind(this);
    this.searchCustomerID = this.searchCustomerID.bind(this);

    this.state = {
      orders: [],
      currentOrder: null,
      currentIndex: -1,
      searchCustomerID: ""
    };
  }
  componentDidMount() {
    this.retrieveOrders();
  }
  onChangeSearchCustomerID(e) {
    const searchCustomerID = e.target.value;
    this.setState({
      searchCustomerID: searchCustomerID
    });
  }
  retrieveOrders() {
    OrderDataService.getAll()
      .then(response => {
        this.setState({
          orders: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveOrders();
    this.setState({
      currentOrder: null,
      currentIndex: -1
    });
  }
  setActiveOrder(order, index) {
    this.setState({
      currentOrder: order,
      currentIndex: index
    });
  }
  removeAllOrders() {
    OrderDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchCustomerID() {
    OrderDataService.findByCustomerID(this.state.searchCustomerID)
      .then(response => {
        this.setState({
          orders: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchCustomerID, orders, currentOrder, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-10">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by CustomerID"
              value={searchCustomerID}
              onChange={this.onChangeSearchCustomerID}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCustomerID}
              >
                Search
              </button>
              <div class="space"></div>
              
              <Link to={"/addorder"}>
                <button type="button" className="btn btn-success">
                Add Order
                </button>
            </Link>
            </div> 
          </div>
          
        </div>
        <div className="col-md-6">
          <h4>Orders List</h4>
          <ul className="list-group">
            {orders &&
              orders.map((order, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveOrder(order, index)}
                  key={index}
                >
                  {order.CustomerID}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllOrders}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentOrder ? (
            <div>
              <h4>Order</h4>
              <div>
                <label>
                  <strong>CustomerID:</strong>
                </label>{" "}
                {currentOrder.CustomerID}
              </div>
              <div>
                <label>
                  <strong>Restaurant name:</strong>
                </label>{" "}
                {currentOrder.name}
              </div>
              <div>
                <label>
                  <strong>DeliveryID:</strong>
                </label>{" "}
                {currentOrder.DeliveryID}
              </div>
              <div>
                <label>
                  <strong>OrderDateTime:</strong>
                </label>{" "}
                {currentOrder.OrderDateTime}
              </div>
              <div>
                <label>
                  <strong>OrderStatus:</strong>
                </label>{" "}
                {currentOrder.OrderStatus}
              </div>
              <div>
                <label>
                  <strong>Longitude:</strong>
                </label>{" "}
                {currentOrder.longitude}
              </div>
              <div>
                <label>
                  <strong>Latitude:</strong>
                </label>{" "}
                {currentOrder.latitude}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentOrder.active ? "Active" : "Inactive"}
              </div>
              <Link
                to={"/orders/" + currentOrder.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Order...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}