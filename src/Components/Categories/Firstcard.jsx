import React, { useState } from "react";
import { cardData } from "../Categories/CardData.jsx";
import "../Categories/FirstCard.css";

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animation, setAnimation] = useState("");

    const handleNext = () => {
        setAnimation("card-exit-left");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
            setAnimation("card-enter-right");
        }, 500); // Match animation duration
    };

    const handlePrev = () => {
        setAnimation("card-exit-right");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex - 1 + cardData.length) % cardData.length
            );
            setAnimation("card-enter-left");
        }, 500); // Match animation duration
    };

    const { title, dishname, description, time, type, image } = cardData[currentIndex];

    return (
        <div className="app-container">
            <button className="nav-button left" onClick={handlePrev}>
                <img src="left-arrow.png" alt="Previous" />
            </button>
            <div className={`MainCard-1 card-container ${animation}`}>
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="dish-name">
                    <span>{dishname}</span>
                </div>
                <div className="dish-description">
                    <span>{description}</span>
                </div>
                <div className="Time">
                    <p>🕔 {time}</p>
                </div>
                <div className="Item-Type">
                    <p>🍽️ {type}</p>
                </div>
                <div className="Dish-Image">
                    <img src={image} alt={title} />
                </div>
            </div>
            <button className="nav-button right" onClick={handleNext}>
                <img src="right-arrow.png" alt="Next" />
            </button>
        </div>
    );
};

export default Card;
