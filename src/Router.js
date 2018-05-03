import React, { Component } from 'react';
import './App.css';
import {squareNumber, pi, getBusinesses} from "./services";
import { Link } from 'react-router-dom';

class Router extends Component {
  constructor() {
    super();
    getBusinesses()
      .then((data) => {
        console.log(data)
      })
    // return abcd()
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({businesses: data})
    //   })

  }
  render() {
    return (
      <div className="nav">
        <ul>
          <li>list item</li>
          <li>list item</li>
        </ul>
        <Link to="/"><button>Back Home</button></Link>
      </div>
    );
  }
}

export default Router
