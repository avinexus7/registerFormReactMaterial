import React from "react";
import Router from "./Router";
import { CssBaseline } from "@material-ui/core";

import { Provider } from "react-redux";

import store from "./store";
import { SET_AUTH_USER } from "./actions/dispatchTypes";

if (localStorage.userData) {
  console.log("#########", store.initialState);
  store.dispatch({
    type: SET_AUTH_USER,
    payload: JSON.parse(localStorage.userData),
  });
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
