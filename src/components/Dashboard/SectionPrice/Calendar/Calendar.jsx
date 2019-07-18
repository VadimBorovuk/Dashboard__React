import React from "react";
import './Calendar.scss';

const Calendar = () => {
    return (
        <div className="calendar">
           <div className="calender__header">
               <div className="header__image">
                   <img src={require('../../../../img/Shape-30.png')} alt=""/>
               </div>
               <div className="header__text">
                   <div className="name">Calender</div>
                   <div className="header__date">18 Jule, 2019</div>
               </div>
               <div className="header__dotted">
                   <div className="dott"></div>
                   <div className="dott"></div>
                   <div className="dott"></div>
               </div>
           </div>
            <div className="calender__mounth">
                <div className="mounth">Jule</div>
            </div>
        </div>
    )
};
export default Calendar;
