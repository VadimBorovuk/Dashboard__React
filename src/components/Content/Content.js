import React from "react";
import './Content.scss';
import Menu from "../Menu/Menu.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import MySkills from "../MySkills/MySkills.jsx";
import MyProjects from "../MyProjects/MyProjects.jsx";
import ContactMe from "../ContactMe/ContactMe.jsx";
import {Route} from "react-router-dom";

const Content = () => {
    return (
        <div className="content">
            <Menu/>
            <Route path="/dashboard"
                   render={() => <Dashboard/>}/>
            <Route path="/myskill"
                   render={() => <MySkills/>}/>
            <Route path="/myprojects"
                   render={() => <MyProjects/>}/>
            <Route path="/contact_me"
                   render={() => <ContactMe/>}/>
        </div>
    )
};
export default Content;

