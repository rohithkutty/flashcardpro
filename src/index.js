import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import Stack from "./components/Stack";
import StackForm from "./components/StackForm";
import rootReducers from "./reducers";
import { setStack } from "./actions";
import "./css/index.css";

const store = createStore(rootReducers);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(setStack({ id: 0, title: "example", cards: [] }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/stack" component={Stack} />
        <Route exact path="/stackform" component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
