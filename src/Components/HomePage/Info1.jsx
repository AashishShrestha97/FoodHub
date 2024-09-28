import React, { useEffect, useRef } from "react";
import '../HomePage/Info1.css'; // Ensure the path is correct

const Info1 = () => {
  const mainBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const box = mainBoxRef.current;
      const boxTop = box.getBoundingClientRect().top;

      // Check if the box is in view
      if (boxTop < window.innerHeight && boxTop > 0) {
        box.classList.add("visible"); // Add the visible class
      } else {
        box.classList.remove("visible"); // Remove the visible class if it goes out of view
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to check if it's already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mainbox" ref={mainBoxRef}>
      <div className="text-content">
        <div id="head">
          <span>Discover restaurants that <br />deliver near you.</span>
        </div>
        <div id="sub">
          <span>
            Explore a variety of cuisines from the nearest restaurants and get your favorite meals delivered fast and fresh, right to your doorstep!
          </span>
        </div>
      </div>
      <div id="phone-image">
        <img src="phone.png" alt="Phone showing restaurant delivery app" />
      </div>
    </div>
  );
};

export default Info1;
