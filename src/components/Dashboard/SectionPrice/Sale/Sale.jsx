import React from "react";
import './Sale.scss';


const Sale = () => {
    return (
        <div className="sale" id="saleId">
            <div className="sale__One">
                <div className="sale__header">Montly Sale</div>
                <div className="sale__info">
                    <div className="sale__text">
                        <div className="sale__number">20 251</div>
                        <div className="sale__today">Today Income</div>
                    </div>
                    <div className="sale__image">
                        <img src={require('../../../../img/Shape-28.png')} alt=""/>
                    </div>
                </div>
                <div className="sale__Oneline"></div>
            </div>
            <div className="sale__Two">
                <div className="sale__header">Yealy Sale</div>
                <div className="sale__info">
                    <div className="sale__text">
                        <div className="sale__number">22 215 22</div>
                        <div className="sale__today">Today Income</div>
                    </div>
                    <div className="sale__image">
                        <img src={require('../../../../img/Shape-29.png')} alt=""/>
                    </div>
                </div>
                <div className="sale__Twoline"></div>
            </div>
        </div>
    )
};
export default Sale;
