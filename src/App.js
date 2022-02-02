import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Login from './Components/Open/Login'
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login />}/>
    </Routes>
  </BrowserRouter>,
      </>
    );
  }
}


export default (App)
