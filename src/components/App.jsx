import React from "react";
import '../js/common'
import Navbar from "./Navbar/Navbar.jsx";
import Content from "./Content/Content.js";

const App = () => {
    return (
        <div className="container block">
                <Navbar/>
                <Content/>
        </div>
    )
};
export default App;

