import React, { useEffect } from "react";
import "../HomePage/DiscountSection.css";

const DiscountSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const discountSection = document.getElementById("Discount-container");
      const rect = discountSection.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Check if the container is in the viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        discountSection.classList.add("active");
      } else {
        // Remove the class if it is out of the viewport
        discountSection.classList.remove("active");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="Discount-container">
      <div id="Head-container">
        <span>Get 20% Off on Your First 3 Orders!!</span>
      </div>
      <div id="Sub-container">
        <span>
          We believe in treating our customers right from the very first bite!
          Enjoy a special 20% discount on your first three orders with us. Whether you're
          craving a quick snack or a full-course meal, our discount makes it even easier
          to satisfy your hunger without breaking the bank. Sign up, place your order,
          and watch the savings add up on delicious food delivered right to your doorstep!!
        </span>
      </div>
      <div id="Discount-image">
        <img src="chef.png" alt="error" />
      </div>
    </div>
  );
};

export default DiscountSection;
