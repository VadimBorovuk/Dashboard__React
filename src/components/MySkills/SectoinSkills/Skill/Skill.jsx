import React from "react";
import './Skill.scss';


const Skill = (props) => {
    return (
        <div className="skill">
            <div className="skill__logo"><img src={props.logo} alt=""/></div>
            <div className="skill__name">{props.name}</div>
            <div className="skill__date">{props.date}</div>
            <div className="skill__prots">{props.prots}</div>
            <div className="skill__shcala"></div>
        </div>
    )
};
export default Skill;

