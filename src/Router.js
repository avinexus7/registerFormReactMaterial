import React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export default function Router() {
  return (
    <div>
      <Header />
      <ReactRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </ReactRouter>
      <Footer />
    </div>
  );
}
