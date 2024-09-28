import React, { useEffect, useRef, useState } from "react";
import '../HomePage/Info2.css';

const Info2 = () => {
    const mainContainerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const container = mainContainerRef.current;

        if (!container) return;

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(container);

        return () => {
            if (container) observer.unobserve(container);
        };
    }, []);

    return (
        <div
            id="main-container"
            ref={mainContainerRef}
            className={isVisible ? "visible" : ""}
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
