import React from "react";
import './SectionPrice.scss';
import Calendar from "./Calendar/Calendar.jsx";
import Sale from "./Sale/Sale.jsx";
import Rating from "./Rating/Rating.jsx";

const SectionPrice = () => {
    return (
        <div className="price">
            <Rating/>
            <Sale/>
            <Calendar/>
        </div>
    )
};
export default SectionPrice;
