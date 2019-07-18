import React from "react";
import './SectoinSkills.scss';
import Skill from "./Skill/Skill.jsx";
import logoJs from '../../../img/skills/js.png'

const SectoinSkills = () => {
    return (
        <div className="myskills__info">
            <div className="info__upper">
                <div className="upper__events">
                    <div className="image">
                        <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="text">
                        <div className="about">No. of events</div>
                        <div className="number">5000</div>
                    </div>
                </div>
                <div className="upper__users">
                    <div className="image">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="text">
                        <div className="about">No. of active users</div>
                        <div className="number">1200</div>
                    </div>
                </div>
                <div className="upper__chats">
                    <div className="image">
                        <i className="fas fa-comment-dots"></i>
                    </div>
                    <div className="text">
                        <div className="about">No. of chat lines</div>
                        <div className="number">90000</div>
                    </div>
                </div>
            </div>
            <div className="info__skills">
                <div className="skills__head">
                    <div className="head__text">Last Activites</div>
                    <div className="head__add">
                        <div className="head__btn">Upload +</div>
                    </div>
                </div>
                <div className="head__line"></div>
                <div className="skills__block">
                    <Skill
                        logo={logoJs}
                        name="JavaScript"
                        date="30.07.18"
                        prots="65%"
                    />
                    <Skill
                        logo={logoJs}
                        name="JavaScript"
                        date="30.07.18"
                        prots="65%"
                    />
                    <Skill
                        logo={logoJs}
                        name="JavaScript"
                        date="30.07.18"
                        prots="65%"
                    />
                    <Skill
                        logo={logoJs}
                        name="JavaScript"
                        date="30.07.18"
                        prots="65%"
                    />


                </div>
            </div>
        </div>
    )
};
export default SectoinSkills;

