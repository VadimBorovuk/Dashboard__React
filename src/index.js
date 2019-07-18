import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import './js/common';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//Font awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root"));