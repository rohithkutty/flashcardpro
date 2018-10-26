import React, { Component } from "react";
import { Link } from "react-router-dom";
import StackList from "./StackList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Flash card pro</h1>
        <hr />
        <StackList />
        <hr />
        <Link to="/stackform">
          <h4>Create a New Stack</h4>
        </Link>
      </div>
    );
  }
}
