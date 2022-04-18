import React, { Component } from "react";
import RestaurantDataService from "../services/restaurant.service";
import { Link } from "react-router-dom";
export default class RestaurantsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveRestaurants = this.retrieveRestaurants.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveRestaurant = this.setActiveRestaurant.bind(this);
    this.removeAllRestaurants = this.removeAllRestaurants.bind(this);
    this.searchName = this.searchName.bind(this);
    this.state = {
      restaurants: [],
      currentRestaurant: null,
      currentIndex: -1,
      searchName: ""
    };
  }
  componentDidMount() {
    this.retrieveRestaurants();
  }
  onChangeSearchName(e) {
    const searchName = e.target.value;
    this.setState({
      searchName: searchName
    });
  }
  retrieveRestaurants() {
    RestaurantDataService.getAll()
      .then(response => {
        this.setState({
          restaurants: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveRestaurants();
    this.setState({
      currentRestaurant: null,
      currentIndex: -1
    });
  }
  setActiveRestaurant(restaurant, index) {
    this.setState({
      currentRestaurant: restaurant,
      currentIndex: index
    });
  }
  removeAllRestaurants() {
    RestaurantDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchName() {
    RestaurantDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          restaurants: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchName, restaurants, currentRestaurant, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-10">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
              
              <div class="space"></div>
              
              <button className="btn btn-success" onClick={this.newTutorial}> Add Restaurant
              </button>
              
            </div> 
          </div>
          
        </div>
        <div className="col-md-6">
          <h4>Restaurants List</h4>
          <ul className="list-group">
            {restaurants &&
              restaurants.map((restaurant, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveRestaurant(restaurant, index)}
                  key={index}
                >
                  {restaurant.name}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllRestaurants}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentRestaurant ? (
            <div>
              <h4>Restaurant</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentRestaurant.name}
              </div>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" "}
                {currentRestaurant.price}
              </div>
              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentRestaurant.type}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentRestaurant.address}
              </div>
              <div>
                <label>
                  <strong>City:</strong>
                </label>{" "}
                {currentRestaurant.city}
              </div>
              <div>
                <label>
                  <strong>State:</strong>
                </label>{" "}
                {currentRestaurant.state}
              </div>
              <div>
                <label>
                  <strong>Zip:</strong>
                </label>{" "}
                {currentRestaurant.zip}
              </div>
              <div>
                <label>
                  <strong>Country:</strong>
                </label>{" "}
                {currentRestaurant.country}
              </div>
              <div>
                <label>
                  <strong>Longitude:</strong>
                </label>{" "}
                {currentRestaurant.longitude}
              </div>
              <div>
                <label>
                  <strong>Latitude:</strong>
                </label>{" "}
                {currentRestaurant.latitude}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentRestaurant.active ? "Active" : "Inactive"}
              </div>
              <Link
                to={"/restaurants/" + currentRestaurant.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Restaurant...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}