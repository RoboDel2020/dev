import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
export default class Restaurant extends Component {
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
    this.getRestaurant = this.getRestaurant.bind(this);
    this.updateActive = this.updateActive.bind(this);
    this.updateRestaurant = this.updateRestaurant.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.state = {
      currentRestaurant: {
        id: null,
        name: "",
        price: 0.0, 
        type: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        longitude: 0.0,
        latitude: 0.0,
        active: true
      },
      message: ""
    };
  }
  componentDidMount() {
    this.getRestaurant(this.props.match.params.id);
  }
  onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState) {
      return {
        currentRestaurant: {
          ...prevState.currentRestaurant,
          name: name
        }
      };
    });
  }
  onChangePrice(e) {
    const price = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        price: price
      }
    }));
  }
  onChangeType(e) {
    const type = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        type: type
      }
    }));
  }
  onChangeAddress(e) {
    const address = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        address: address
      }
    }));
  }
  onChangeCity(e) {
    const city = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        city: city
      }
    }));
  }
  onChangeState(e) {
    const state = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        state: state
      }
    }));
  }
  onChangeZip(e) {
    const zip = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        zip: zip
      }
    }));
  }
  onChangeCountry(e) {
    const country = e.target.value;
    
    this.setState(prevState => ({
      currentRestaurant: {
        ...prevState.currentRestaurant,
        country: country
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
  getRestaurant(id) {
    RestaurantDataService.get(id)
      .then(response => {
        this.setState({
          currentRestaurant: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateActive(status) {
    var data = {
      id: this.state.currentRestaurant.id,
      name: this.state.currentRestaurant.name,
      price: this.state.currentRestaurant.price,
      type: this.state.currentRestaurant.type,
      address: this.state.currentRestaurant.address,
      city: this.state.currentRestaurant.city,
      state: this.state.currentRestaurant.state,
      zip: this.state.currentRestaurant.zip,
      country: this.state.currentRestaurant.country,
      longitude: this.state.currentRestaurant.longitude,
      latitude: this.state.currentRestaurant.latitude,
      active: status
    };
    RestaurantDataService.update(this.state.currentRestaurant.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentRestaurant: {
            ...prevState.currentRestaurant,
            active: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateRestaurant() {
    RestaurantDataService.update(
      this.state.currentRestaurant.id,
      this.state.currentRestaurant
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The restaurant was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteRestaurant() {    
    RestaurantDataService.delete(this.state.currentRestaurant.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/restaurants')
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentRestaurant } = this.state;
    return (
      <div>
        {currentRestaurant ? (
          <div className="edit-form">
            <h4>Restaurant</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentRestaurant.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={currentRestaurant.price}
                  onChange={this.onChangePrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  value={currentRestaurant.type}
                  onChange={this.onChangeType}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentRestaurant.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={currentRestaurant.city}
                  onChange={this.onChangeCity}
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  value={currentRestaurant.state}
                  onChange={this.onChangeState}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  value={currentRestaurant.zip}
                  onChange={this.onChangeZip}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value={currentRestaurant.country}
                  onChange={this.onChangeCountry}
                />
              </div>
              <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  value={currentRestaurant.longitude}
                  onChange={this.onChangeLongitude}
                />
              </div>
              <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  id="latitude"
                  value={currentRestaurant.latitude}
                  onChange={this.onChangeLatitude}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentRestaurant.active ? "Active" : "Inactive"}
              </div>
            </form>
            {currentRestaurant.active ? (
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
              onClick={this.deleteRestaurant}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateRestaurant}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Restaurant...</p>
          </div>
        )}
      </div>
    );
  }
}