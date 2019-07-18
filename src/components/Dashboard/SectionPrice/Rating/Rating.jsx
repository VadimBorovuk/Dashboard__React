import React from "react";
import './Rating.scss';


const Rating = () => {
    return (
        <div className="rating" id="ratingId">
            <div className="header__rating">Earning in Month </div>
            <div className="image__rating">
                <div className="center__rating"></div>
            </div>
            <div className="line__image"></div>
            <div className="info__rating">
                <p>Deposit :<span>$2351214</span></p>
                <p>Expese : <span>$24125</span></p>
                <p>payable :<span>$3253514</span></p>
            </div>
        </div>
    )
};
export default Rating;
