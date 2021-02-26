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
      <Route path="/" render={() => <Saved/>} />
        <Route path="/Saved" render={() => <Saved/>} />
        <Route exact path="/search" component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}


export default App;
