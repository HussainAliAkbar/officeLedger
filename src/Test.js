import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class Test extends Component {
  render() {
      return (
        <div className="title">
          <h1>React Router demo</h1>
          <Link to="/list"><button>Show the List</button></Link>
          <p>process.env.REACT_APP_SECRET_CODE</p>
          <p>process.env.SERVER_PORT</p>
        </div>
      )
    }
}

export default Test
