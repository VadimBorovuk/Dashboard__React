import React from "react";
import './Crafic.scss';

const Grafic = () => {
    return (
        <div className="static__graf">
            <div className="grafic">
                <div className="grafic__head">
                    <div className="grafic__static">
                        Statistics
                    </div>
                    <div className="grafic__date">
                        <p className="year">2018
                            <span><i className="fas fa-chevron-down"></i></span>
                        </p>
                        <p className="month">Month
                            <span><i className="fas fa-chevron-down"></i></span>
                        </p>
                    </div>
                </div>
                <div className="grafic__block">
                    <div className="grafic__number">
                        <div>500</div>
                        <div>400</div>
                        <div>300</div>
                        <div>200</div>
                        <div>100</div>
                        <div>0</div>
                    </div>
                    <div className="grafic__image">
                        <img src={require('../../../../img/Static-graph.png')} alt=""/>
                    </div>
                </div>
                <div className="grafic__month">
                    <div>Jan</div>
                    <div>Fed</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                    <div>Aug</div>
                    <div>Sep</div>
                    <div>Oct</div>
                    <div>Nov</div>
                    <div>Dec</div>
                </div>
            </div>
        </div>
    )
};
export default Grafic;
