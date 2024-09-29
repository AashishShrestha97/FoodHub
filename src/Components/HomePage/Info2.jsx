import React, { useEffect, useRef } from "react";
import '../HomePage/Info2.css';

const Info2 = () => {
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
        <div
            id="main-container"
            ref={mainBoxRef} // Corrected ref
        >
            <div id="Header">
                <span>More than 100 Outlets and Restaurants are at your service.</span>
            </div>
            <div id="sub-head">
                <span>
                    With over 100 outlets and restaurants at your service, you have access to a wide array of delicious options. Whether you're in the mood for a quick bite or a full meal, our diverse selection caters to every craving. Enjoy the convenience of having your favorite dishes delivered right to your doorstep!
                </span>
            </div>
            <div id="photo">
                <img id="photo1" src="restaurant2.jpg" alt="Restaurant 2" />
                <img id="photo2" src="restaurant3.jpg" alt="Restaurant 3" />
            </div>
        </div>
    );
};

export default Info2;
