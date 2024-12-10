import React from "react";
import "../Categories/FirstCard.css";

const FirstCard = () => {
    return (
        <>
        <div className="MainCard-1">
            <div className="title">
                <h1>Most Popular Item Of This Week</h1>
            </div>
            <div className="dish-name">
                <span>Spicy Delicious <br />Chicken Wings</span>
            </div>
            <div className="dish-description">
                <span> 
                    Craving a bold and fiery bite? Our Spicy Chicken Wings are the ultimate treat for spice lovers!  
                    Each wing is marinated in a flavorful blend of hot chili, garlic, and secret spices, then perfectly fried or baked to crispy perfection.  
                    Served with a side of cool ranch or tangy hot sauce for an extra kick, these wings are irresistible.  
                    Whether it's game night, a party, or a solo feast, our Spicy Chicken Wings will leave your taste buds tingling for more!  
                    **Order now and experience the heat delivered straight to your door!**
                </span>
                </div>
                {/* <div className="Time">
                    <p>🕔 30 minutes</p>
                </div>
                <div className="Item-Type">
                    <p>🍽️ Chicken</p>
                </div>
                <div className="Dish-Image">
                    <img src="chicken-wings.webp" alt="" />
                </div> */}
            </div>
        </>
    );
};

export default FirstCard;
