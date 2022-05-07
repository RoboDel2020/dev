import React, { Component } from "react";
import OrderDataService from "../services/order.service";
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.onChangeCustomerID = this.onChangeCustomerID.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDeliveryID = this.onChangeDeliveryID.bind(this);
    this.onChangeOrderDateTime = this.onChangeOrderDateTime.bind(this);
    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.newOrder = this.newOrder.bind(this);
    this.updateActive = this.updateActive.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.state = {
      currentOrder: {
        id: null,
      CustomerID: "",
      name: "", 
      DeliveryID: "",
      OrderDateTime: "",
      OrderStatus: "",
      longitude: "",
      latitude: "",
      active: true,
      // submitted: false
      },
      message: ""
    };
  }
  componentDidMount() {
    this.getOrder(this.props.match.params.id);
  }
  onChangeCustomerID(e) {
    const CustomerID = e.target.value;
    this.setState(function(prevState) {
      return {
        currentOrder: {
          ...prevState.currentOrder,
          CustomerID: CustomerID
        }
      };
    });
  }
  onChangename(e) {
    const name = e.target.value;
    
    this.setState(prevState => ({
      currentOrder: {
        ...prevState.currentOrder,
        name: name
      }
    }));
  }
  onChangeDeliveryID(e) {
    const DeliveryID = e.target.value;
    
    this.setState(prevState => ({
      currentOrder: {
        ...prevState.currentOrder,
        DeliveryID: DeliveryID
      }
    }));
  }
  onChangeOrderDateTime(e) {
    const OrderDateTime = e.target.value;
    
    this.setState(prevState => ({
      currentOrder:  {
        ...prevState.currentOrder,
        OrderDateTime: OrderDateTime
      }
    }));
  }
  onChangeOrderStatus(e) {
    const OrderStatus = e.target.value;
    
    this.setState(prevState => ({
      currentOrder: {
        ...prevState.currentOrder,
        OrderStatus: OrderStatus
      }
    }));
  }

  onChangeLongitude(e) {
    const longitude = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        longitude: longitude
      }
    }));
  }
  onChangeLatitude(e) {
    const latitude = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        latitude: latitude
      }
    }));
  }
  getOrder(id) {
    OrderDataService.get(id)
      .then(response => {
        this.setState({
          currentOrder: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateActive(status) {
    var data = {
      name: this.state.name,
      CustomerID: this.state.CustomerID,
      name: this.state.name, 
      DeliveryID: this.state.DeliveryID,
      OrderDateTime: this.state.OrderDateTime,
      OrderStatus: this.state.OrderStatus,
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      active: status
    };
    OrderDataService.update(this.state.currentOrder.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentOrder: {
            ...prevState.currentOrder,
            active: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateOrder() {
    OrderDataService.update(
      this.state.currentOrder.id,
      this.state.currentOrder
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Order was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteOrder() {    
    OrderDataService.delete(this.state.currentOrder.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/orders')
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentOrder } = this.state;
    return (
      <div>
        {currentOrder ? (
          <div className="edit-form">
            <h4>Order</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">CustomerID</label>
                <input
                  type="text"
                  className="form-control"
                  id="CustomerID"
                  value={currentOrder.CustomerID}
                  onChange={this.onChangeCustomerID}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentOrder.name}
                  onChange={this.onChangename}
                />
              </div>
              <div className="form-group">
                <label htmlFor="DeliveryID">DeliveryID</label>
                <input
                  type="text"
                  className="form-control"
                  id="DeliveryID"
                  value={currentOrder.DeliveryID}
                  onChange={this.onChangeDeliveryID}
                />
              </div>
              <div className="form-group">
                <label htmlFor="OrderDateTime">OrderDateTime</label>
                <input
                  type="text"
                  className="form-control"
                  id="OrderDateTime"
                  value={currentOrder.OrderDateTime}
                  onChange={this.onChangeOrderDateTime}
                />
              </div>
              <div className="form-group">
                <label htmlFor="OrderStatus">OrderStatus</label>
                <input
                  type="text"
                  className="form-control"
                  id="OrderStatus"
                  value={currentOrder.OrderStatus}
                  onChange={this.onChangeOrderStatus}
                />
              </div>
     
              <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  value={currentOrder.longitude}
                  onChange={this.onChangeLongitude}
                />
              </div>
              <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  value={currentOrder.latitude}
                  onChange={this.onChangeLatitude}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentOrder.active ? "Active" : "Inactive"}
              </div>
            </form>
            {currentOrder.active ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateActive(false)}
              >
                Deactivate
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateActive(true)}
              >
                Activate
              </button>
            )}
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteOrder}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateOrder}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Order...</p>
          </div>
        )}
      </div>
    );
  }
}