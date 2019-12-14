import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/global/navbar";

import { BrowserRouter as R, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <R>
          {" "}
          <Navbar />
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </R>
      </Provider>
    </div>
  );
}

export default App;
