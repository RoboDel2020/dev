import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
export default class AddRestaurant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.saveRestaurant = this.saveRestaurant.bind(this);
    this.newRestaurant = this.newRestaurant.bind(this);
    this.state = {
      id: null,
      name: "",
      price: "", 
      type: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      longitude: "",
      latitude: "",
      active: true,
      submitted: false
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }
  onChangeZip(e) {
    this.setState({
      zip: e.target.value
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value
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
  saveRestaurant() {
    var data = {
      name: this.state.name,
      price: this.state.price,
      type: this.state.type,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      country: this.state.country,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    };
    RestaurantDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          type: response.data.type,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          country: response.data.country,
          longitude: response.data.longitude,
          latitude: response.data.latitude,
          active: response.data.active,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newRestaurant() {
    this.setState({
      id: null,
      name: "",
      price: "",
      type: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      longitude: "",
      latitude: "",
      active: true,
      submitted: false
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>The Restaurant is added!</h4>
            <button className="btn btn-success" onClick={this.newRestaurant}>
              Add Another Restaurant
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div><div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangeCity}
                name="city"
              />
            </div><div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                required
                value={this.state.state}
                onChange={this.onChangeState}
                name="state"
              />
            </div><div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                required
                value={this.state.zip}
                onChange={this.onChangeZip}
                name="zip"
              />
            </div><div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                required
                value={this.state.country}
                onChange={this.onChangeCountry}
                name="country"
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
            <button onClick={this.saveRestaurant} className="btn btn-success">
              Create
            </button>
          </div>
        )}
      </div>
    );
  }
}