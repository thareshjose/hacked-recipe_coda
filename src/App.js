import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact strict component={Home} />

        <Route path="/:id" exact strict component={RecipeDetails} />
      </Switch>
    </Router>
  );
}

export default App;
