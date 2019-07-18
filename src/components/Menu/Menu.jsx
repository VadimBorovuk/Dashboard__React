import React from "react";
import './Menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <div className="sourch">
                <i className="fas fa-search"></i>
            </div>
            <div className="bell">
                <i className="far fa-bell"></i>
            </div>
            <div className="message">
                <i className="far fa-envelope"></i>
            </div>
            <div className="avatar">
                <img src={require('../../img/ava.jpg')} alt=""/>
            </div>
            <div className="dropdown">
                <span><i className="fas fa-chevron-down"></i></span>
            </div>
        </div>
    )
};
export default Menu;
