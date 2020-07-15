import React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  // HashRouter,
} from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import NotFound from "./components/Layout/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

export default function Router() {
  return (
    <div>
      {/* <HashRouter basename="/"> */}
      <Header />
      <ReactRouter>
        <Switch>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/register"} component={Landing}></Route>
          <Route path={"/"} component={Register}></Route>
          <Route path={"*"} component={NotFound}></Route>
        </Switch>
      </ReactRouter>
      <Footer />
      {/* </HashRouter> */}
    </div>
  );
}
