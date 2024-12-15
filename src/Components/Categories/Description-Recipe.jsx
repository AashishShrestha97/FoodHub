import React, { useEffect, useRef, useState } from "react";
import "../Categories/Description-Recipe.css";

const Recipe = () => {
  const recipeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (recipeRef.current) {
      observer.observe(recipeRef.current);
    }

    return () => {
      if (recipeRef.current) {
        observer.unobserve(recipeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={recipeRef}
      className={`Big-Container ${isVisible ? "animate-container" : ""}`}
    >
      <div className={`Container-Head ${isVisible ? "animate-head" : ""}`}>
        <h1>Quality and Simple Recipes</h1>
      </div>
      <div
        className={`Container-Description ${
          isVisible ? "animate-description" : ""
        }`}
      >
        <span>
          Welcome to FoodHub, where quality meets convenience! Our mission is
          to bring you the finest recipes and the freshest ingredients,
          ensuring every bite you take is a delight. At FoodHub, we take pride
          in sourcing premium-quality products to create meals that not only
          taste great but also nourish your body.
          Our carefully curated menu features a wide variety of dishes, from
          wholesome comfort foods to gourmet delights, crafted with love and
          expertise. Whether you're craving a classic Biryani or exploring new
          flavors, we guarantee that every meal is made with the highest
          standards of hygiene and freshness.
          At FoodHub, customer satisfaction is our priority. We are committed
          to providing you with exceptional service, timely deliveries, and
          food that satisfies your cravings while exceeding your expectations.
          Experience the joy of dining with FoodHub—your go-to destination for
          quality and taste!
        </span>
      </div>
    </div>
  );
};

export default Recipe;
