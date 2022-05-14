import React, { Component } from "react";
import OrderDataService from "../services/order.service";
import RestaurantDataService from "../services/restaurant.service";
import axios from 'axios'
export default class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.retrieveRestaurants = this.retrieveRestaurants.bind(this);
    this.onChangeCustomerID = this.onChangeCustomerID.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDeliveryID = this.onChangeDeliveryID.bind(this);
    this.onChangeOrderDateTime = this.onChangeOrderDateTime.bind(this);
    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.newOrder = this.newOrder.bind(this);
    this.state = {
      id: null,
      CustomerID: null,
      name: "", 
      DeliveryID: null,
      OrderDateTime: null,
      OrderStatus: "",
      longitude: "",
      latitude: "",
      // active: true,
      submitted: false,
      CustomerData : [],
      RestaurantData : []
    };
  }

  componentDidMount(){
    const url = 'http://localhost:8080/customer'
        axios.get(url)
            .then((response)=>{
                this.setState({
                  CustomerData:response.data
                });
                
            })
            .catch(err => {
                console.log(err)
            })
            this.retrieveRestaurants();         
  }
  retrieveRestaurants() {
    RestaurantDataService.getAll()
      .then(response => {
        this.setState({
          RestaurantData: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  onChangeCustomerID(e) {
    this.setState({
      CustomerID: e.target.value
    });
  }
  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDeliveryID(e) {
    this.setState({
      DeliveryID: e.target.value
    });
  }
  onChangeOrderDateTime(e) {
    this.setState({
      OrderDateTime: e.target.value
    });
  }
  onChangeOrderStatus(e) {
    this.setState({
      OrderStatus: e.target.value
    });
  }
  onChangeLongitude(e) {
    this.setState({
      longitude: e.target.value
    });
  }
  onChangeLatitude(e) {
    this.setState({
      latitude: e.target.value
    });
  }
  saveOrder() {
    var data = {
      // name: this.state.name,
      CustomerID: this.state.CustomerID,
      name: this.state.name, 
      DeliveryID: this.state.DeliveryID,
      OrderDateTime: this.state.OrderDateTime,
      OrderStatus: this.state.OrderStatus,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    };
    OrderDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          CustomerID: response.data.CustomerID,
          name: response.data.name, 
          DeliveryID: response.data.DeliveryID,
          OrderDateTime: response.data.OrderDateTime,
          OrderStatus: response.data.OrderStatus,
          longitude: response.data.longitude,
          latitude: response.data.latitude,
          // active: response.data.active,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newOrder() {
    this.setState({
        id: null,
        CustomerID: "",
        name: "", 
        DeliveryID: "",
        OrderDateTime: "",
        OrderStatus: "",
        longitude: "",
        latitude: "",
        // active: true,
        submitted: false
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>The Order is added!</h4>
            <button className="btn btn-success" onClick={this.newOrder}>
              Add Another Order
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="CustomerID">CustomerID</label>
              <select id="CustomerID" className="form-control " name="CustomerID" required value={this.state.CustomerData}  >  
                {this.state.CustomerData.map((e, key) => {  
                return <option key={key} value={e.CustomerID}>{e.CustomerID}</option>;  
                })}  
              </select> 
            </div>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <select id="name" className="form-control " name="name" required value={this.state.RestaurantData}  >  
                {this.state.RestaurantData.map((e, key) => {  
                return <option key={key} value={e.name}>{e.name}</option>;  
                })}  
              </select> 
            </div>
            <div className="form-group">
              <label htmlFor="DeliveryID">DeliveryID</label>
              <input
                type="DeliveryID"
                className="form-control"
                id="DeliveryID"
                required
                value={this.state.DeliveryID}
                onChange={this.onChangeDeliveryID}
                name="DeliveryID"
              />
            </div>
            <div className="form-group">
              <label htmlFor="OrderDateTime">OrderDateTime</label>
              <input
                type="text"
                className="form-control"
                id="OrderDateTime"
                required
                value={this.state.OrderDateTime}
                onChange={this.onChangeOrderDateTime}
                name="OrderDateTime"
              />
            </div><div className="form-group">
              <label htmlFor="OrderStatus">OrderStatus</label>
              <input
                type="text"
                className="form-control"
                id="OrderStatus"
                required
                value={this.state.OrderStatus}
                onChange={this.onChangeOrderStatus}
                name="OrderStatus"
              />
            </div><div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                required
                value={this.state.longitude}
                onChange={this.onChangeLongitude}
                name="longitude"
              />
            </div><div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                required
                value={this.state.latitude}
                onChange={this.onChangeLatitude}
                name="latitude"
              />
            </div>
            <button onClick={this.saveOrder} className="btn btn-success">
              Create
            </button>
          </div>
        )}
      </div>
    );
  }
}