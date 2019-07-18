import React from "react";
import './Navbar.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={require('../../img/logo.png')} alt=""/>
            </div>
            <div className="navbar__item">
                <ul className="navbar__elems">
                    <li className="navbar__elem">
                        <div className="logo">
                            <img src={require('../../img/icons/dashboard.png')} alt=""/>
                        </div>
                        <div className="text">
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </div>
                    </li>
                    <li className="navbar__elem">
                        <div className="logo">
                            <img src={require('../../img/icons/my-task.png')} alt=""/>
                        </div>
                        <div className="text">
                            <NavLink to="/myskill">My Skills</NavLink>
                        </div>
                    </li>
                    <li className="navbar__elem">
                        <div className="logo">
                            <img src={require('../../img/icons/my-project.png')} alt=""/>
                        </div>
                        <div className="text">
                            <NavLink to="/myprojects">My Projects</NavLink>
                        </div>
                    </li>
                    <li className="navbar__elem">
                        <div className="logo">
                            <img src={require('../../img/icons/my-wallet.png')} alt=""/>
                        </div>
                        <div className="text">
                            <NavLink to="/contact_me">Contact me</NavLink>
                        </div>
                    </li>
                    <li className="navbar__logout">
                        <div className="logo">
                            <img src={require('../../img/icons/logout.png')} alt=""/>
                        </div>
                        <div className="text">Logout</div>
                    </li>

                </ul>
            </div>
        </div>
    )
};
export default Navbar;

