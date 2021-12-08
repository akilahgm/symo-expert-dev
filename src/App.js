import "./App.css";
import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { getSymbols } from "./firebase";
import { FormControl, Form, Button } from "react-bootstrap";

function App() {
  const [symbol, setSymbol] = useState([]);
  if (symbol.length == 0) {
    getSymbols().then((res) => {
      setSymbol(res);
    });
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          SYMO EXPERT
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/symo-expert-dev/">
                Symbol Guide <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/symo-expert-dev/about">
                Caris S-57 Composer
              </a>
            </li>
          </ul>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                getSymbols(event.target.value).then((res) => {
                  setSymbol(res);
                });
              }}
            />
          </Form>
          <span class="nav-item">
            <a class="nav-link" href="/symo-expert-dev/about">
              S-57 ENC Object Catalogue
            </a>
          </span>
        </div>
      </nav>
      <BrowserRouter>
        <Switch>
          {/* <PublicRoute isRestricted={true} path="/login" component={Login} /> */}
          <Route
            path="/symo-expert-dev/"
            exact={true}
            render={(props) => <Home {...props} symbols={symbol} />}
          />
          <Route path="/symo-expert-dev/about" exact={true} component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
