import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends Component {

  render() {
    
    return (
      <div>
        <h3>Page not found</h3>
        <Link to={"/"}>Go To Homepage</Link>
      </div>
    )
  }
}