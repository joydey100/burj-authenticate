import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import ContextProvider from "./Context/ContextProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
