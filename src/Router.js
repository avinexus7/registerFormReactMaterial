import React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export default function Router() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <ReactRouter>
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/login"} component={Login}></Route>
            <Route path={process.env.PUBLIC_URL +  "/register"} component={Register}></Route>
            <Route path={process.env.PUBLIC_URL + "/"} component={Landing}></Route>
          </Switch>
        </ReactRouter>
        <Footer />
      </HashRouter>
    </div>
  );
}
