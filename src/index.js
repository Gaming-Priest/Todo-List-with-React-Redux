import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import ReduxStore from './Components/Redux/reduxStoreConfig'
import { BrowserRouter as Router, } from 'react-router-dom'
import App from "./App";
import "./styles.less";
import 'bootstrap/dist/css/bootstrap.css';
import '../fontawesome@5.15.1/css/all.css'
const store = ReduxStore

var mountNode = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, mountNode);
  