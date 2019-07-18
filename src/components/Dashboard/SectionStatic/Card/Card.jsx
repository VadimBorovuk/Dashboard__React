import React from "react";

const Card = () => {
    return (
        <div className="credit__Card">
            <div className="head">My Credit Card</div>
            <div className="cardic">
                <img src={require('../../../../img/card.png')} alt=""/>
            </div>
            <div className="line"></div>
            <div className="static__text">
                <p>Card number: <span>2351 21445 31553</span></p>
                <p>Account Name: <span>Vadim Borovik</span></p>
                <p>Card status: <span>Active</span></p>
            </div>
        </div>
    )
};
export default Card;
