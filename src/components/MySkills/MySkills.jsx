import React from "react";
import './MySkills.scss';
import SectoinSkills from "./SectoinSkills/SectoinSkills.jsx";
import SectionRating from "./SectionRating/SectionRating.jsx";

const MySkills = () => {
    return (
        <div className="myskills">
            <SectoinSkills/>
            <SectionRating/>
        </div>
    )
};
export default MySkills;

