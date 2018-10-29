import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import "../setupTests";

describe("App component", () => {
  const app = shallow(<App />);

  it("renders the flashcard pro title", () => {
    expect(app.find("h1").text()).toEqual("Flash card pro");
  });

  it("renders the StackList", () => {
    expect(app.find("Connect(StackList)").exists()).toBe(true);
  });

  it("renders a link to create new sstacks", () => {
    expect(app.find("Link h4").text()).toEqual("Create a New Stack");
  });
});
