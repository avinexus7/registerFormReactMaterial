import React from "react";
import Router from "./Router";
import { CssBaseline } from "@material-ui/core";

import {Provider} from 'react-redux'

import store from './store'

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
