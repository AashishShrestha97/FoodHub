import React, { useState, useEffect } from "react";
import "../Menu/Description.css";

const Description = () => {
  const [bgIndex, setBgIndex] = useState(0);

  const images = ["food1.jpg", "food2.jpg", "food3.jpg"];

  // Effect to change the background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div
      id="main-box"
      style={{ backgroundImage: `url(${images[bgIndex]})` }}
    >
      <div id="Head">
        <span>
          O<span className="red-text">u</span>r M<span className="red-text">e</span>nu
        </span>
      </div>
      <div id="Sub">
        <span>
          Welcome to our <span className="red-text">FoodHub Menu!</span> Dive into a world of
          <span className="red-text"> flavors</span> with our carefully curated selection of
          <span className="red-text"> mouth-watering dishes</span> designed to satisfy every craving. From
          <span className="red-text">sizzling starters</span> to <span className="red-text">hearty main courses</span>,
          our menu boasts a variety of cuisines that celebrate the richness of global tastes. Whether you're in the mood for a comforting bowl of
          <span className="red-text"> pasta</span>, a <span className="red-text">spicy plate of Biryani</span>, or a
          <span className="red-text"> fresh and healthy salad</span>, we've got something to tantalize every palate.
          Our ingredients are <span className="red-text">sourced fresh daily</span>, ensuring that each bite bursts with
          <span className="red-text"> quality and flavor</span>. Explore our menu and let your taste buds embark on a
          <span className="red-text">delicious journey</span>!
        </span>
      </div>
    </div>
  );
};

export default Description;
