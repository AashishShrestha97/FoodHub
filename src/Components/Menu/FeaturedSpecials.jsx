import React, { useEffect, useRef, useState } from "react";
import '../Menu/FeaturedSpecials.css';

const specialDishes = [
    {
        id: 1,
        name: "Chef's Signature Pasta",
        description: "Handmade pasta with truffle cream sauce, wild mushrooms, and aged parmesan",
        price: "Rs. 1,250",
        originalPrice: "Rs. 1,500",
        image: "signature-pasta.jpg",
        category: "Italian",
        rating: 4.9,
        cookTime: "25 min",
        spiceLevel: "Mild",
        isVeg: true,
        badge: "Chef's Special"
    },
    {
        id: 2,
        name: "Dragon Roll Supreme",
        description: "Premium sushi roll with fresh salmon, avocado, and special dragon sauce",
        price: "Rs. 1,800",
        originalPrice: "Rs. 2,100",
        image: "dragon-roll.jpg",
        category: "Japanese",
        rating: 4.8,
        cookTime: "15 min",
        spiceLevel: "Mild",
        isVeg: false,
        badge: "Most Popular"
    },
    {
        id: 3,
        name: "Tandoori Platter Deluxe",
        description: "Assorted tandoori meats and vegetables with basmati rice and naan bread",
        price: "Rs. 2,200",
        originalPrice: "Rs. 2,600",
        image: "tandoori-platter.jpg",
        category: "Indian",
        rating: 4.7,
        cookTime: "35 min",
        spiceLevel: "Hot",
        isVeg: false,
        badge: "Limited Time"
    },
    {
        id: 4,
        name: "Mediterranean Bowl",
        description: "Quinoa bowl with grilled halloumi, olives, fresh vegetables, and tahini dressing",
        price: "Rs. 950",
        originalPrice: "Rs. 1,200",
        image: "mediterranean-bowl.jpg",
        category: "Mediterranean",
        rating: 4.6,
        cookTime: "20 min",
        spiceLevel: "Mild",
        isVeg: true,
        badge: "Healthy Choice"
    }
];

const FeaturedSpecials = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % specialDishes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % specialDishes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + specialDishes.length) % specialDishes.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section 
            className={`featured-specials-section ${isVisible ? 'animate-in' : ''}`}
            ref={sectionRef}
        >
            <div className="specials-container">
                <div className="section-header">
                    <div className="headers-badges">Today's Specials</div>
                    <h2 className="section-title">
                        <span className="title-highlight">Featured</span> Delicacies
                    </h2>
                    <p className="sections-subtitles">
                        Handpicked by our chefs, these signature dishes represent the finest flavors from our kitchen
                    </p>
                </div>

                <div className="specials-carousel">
                    <div className="carousel-container">
                        <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous special">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <div className="carousel-track">
                            <div 
                                className="carousel-slides"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {specialDishes.map((dish, index) => (
                                    <div key={dish.id} className="special-card">
                                        <div className="card-badge-container">
                                            <span className={`special-badge ${dish.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                                                {dish.badge}
                                            </span>
                                        </div>
                                        
                                        <div className="card-image-wrapper">
                                            <img 
                                                src={dish.image} 
                                                alt={dish.name}
                                                className="card-image"
                                                loading="lazy"
                                            />
                                            <div className="image-overlay">
                                                <div className="quick-info">
                                                    <span className="cook-time">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                                            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                        {dish.cookTime}
                                                    </span>
                                                    <span className={`spice-level ${dish.spiceLevel.toLowerCase()}`}>
                                                        🌶️ {dish.spiceLevel}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <div className="dish-header">
                                                <div className="dish-meta">
                                                    <span className="category-tag">{dish.category}</span>
                                                    <span className={`diet-indicator ${dish.isVeg ? 'veg' : 'non-veg'}`}>
                                                        {dish.isVeg ? '🟢' : '🔴'}
                                                    </span>
                                                </div>
                                                <div className="rating">
                                                    <span className="stars">
                                                        {'★'.repeat(Math.floor(dish.rating))}
                                                    </span>
                                                    <span className="rating-number">{dish.rating}</span>
                                                </div>
                                            </div>

                                            <h3 className="dish-name">{dish.name}</h3>
                                            <p className="dish-description">{dish.description}</p>

                                            <div className="price-section">
                                                <div className="price-info">
                                                    <span className="current-price">{dish.price}</span>
                                                    <span className="original-price">{dish.originalPrice}</span>
                                                    <span className="discount">
                                                        {Math.round((1 - parseInt(dish.price.replace('Rs. ', '').replace(',', '')) / parseInt(dish.originalPrice.replace('Rs. ', '').replace(',', ''))) * 100)}% OFF
                                                    </span>
                                                </div>
                                                <button className="add-to-cart-btn">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next special">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="carousel-indicators">
                        {specialDishes.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="cta-section">
                    <button className="view-all-specials-btn">
                        <span>View All Today's Specials</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpecials;