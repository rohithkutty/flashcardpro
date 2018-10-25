import React, { Component } from "react";
import StackList from "./StackList";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Flash card pro</h1>
        <hr />
        <StackList />
      </div>
    );
  }
}
