import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <Router >
      <Nav />
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Saved />} />
        <Route exact path="/Save" render={() => <Saved />} />
        <Route exact path="/search" component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}


export default App;
