import React, { Component } from "react";
import stacks from "../data/stacks.json";
import { Link } from "react-router-dom";

export default class StackList extends Component {
  render() {
    return (
      <div>
        {stacks.map(stack => {
          return (
            <h4 key={stack.id}>
              <Link to="/stack">{stack.title}</Link>
            </h4>
          );
        })}
      </div>
    );
  }
}
