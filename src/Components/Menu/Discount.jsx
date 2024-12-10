import React from "react";
import "../Menu/Discount.css";

const Discount = () => {
    return (
        <div className="TheMain-box">
            <div className="Discount-image">
                <img src="discount_menu.png" alt="Discount Offer" />
                <div className="discount-text">Amazing Discount!</div>
            </div>
            <button className="interaction-button">Grab the Offer</button>
        </div>
    );
};

export default Discount;
