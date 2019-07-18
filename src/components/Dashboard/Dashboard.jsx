import React from "react";
import './Dashboard.scss';
import SectionStatic from "./SectionStatic/SectionStatic.jsx";
import SectionPrice from "./SectionPrice/SectionPrice.jsx";

const Dashboard = () => {
    return (
        <div className="intro">
            <SectionStatic/>
            <SectionPrice/>
        </div>
    )
};
export default Dashboard;
