import * as actions from "./index";
import { stack, stacks } from "../data/fixtures";

describe("actions", () => {
  it("creates an action to set the main stack", () => {
    let expectedAction = {
      type: actions.SET_STACK,
      stack
    };

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });

  it("creates an action to add the stack", () => {
    let expectedAction = {
      type: actions.ADD_STACK,
      stack
    };

    expect(actions.addStack(stack)).toEqual(expectedAction);
  });

  it("creates an action to load the  stack", () => {
    let expectedAction = {
      type: actions.LOAD_STACKS,
      stacks
    };

    expect(actions.loadStacks(stacks)).toEqual(expectedAction);
  });
});
