import React from "react";
import './SectionStatic.scss';
import Grafic from "./Grafic/Crafic.jsx";
import Card from "./Card/Card.jsx";

const SectionStatic = () => {
    return (
        <div className="static">
            <Card/>
            <Grafic/>
        </div>
    )
};
export default SectionStatic;
