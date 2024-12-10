import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../Menu/MenuCategories.css';

const categories = [
    {
        id: 1,
        name: "Italian",
        description: "Experience authentic Italian flavors in every bite!",
        image: "Italianfood.webp",
    },
    {
        id: 2,
        name: "Chinese",
        description: "Savor the tastes of traditional and authentic Chinese cuisine.",
        image: "Chinesefood.png",
    },
    {
        id: 3,
        name: "Indian",
        description: "Indulge in rich, spicy, and flavorful Indian dishes.",
        image: "Indianfood.jpg",
    },
    {
        id: 4,
        name: "Mexican",
        description: "Enjoy vibrant and spicy flavors from Mexican cuisine.",
        image: "Mexicanfood.webp",
    },
    {
        id: 5,
        name: "Japanese",
        description: "Taste the umami and fresh flavors of Japanese food.",
        image: "Japanesefood.jpg",
    },
    {
        id: 6,
        name: "Mediterranean",
        description: "Healthy and delicious flavors from the Mediterranean region.",
        image: "Mediterraneanfood.jpg",
    },
    {
        id: 7,
        name: "French",
        description: "Delight in the rich and refined flavors of French cuisine.",
        image: "Frenchfood.png",
    },
    {
        id: 8,
        name: "Thai",
        description: "A perfect blend of spicy, sweet, and savory Thai dishes.",
        image: "Thaifood.jpeg",
        
    },
    {
        id: 9,
        name: "Spanish",
        description: "Explore the vibrant and diverse tastes of Spanish cuisine.",
        image: "Spanishfood.jpg",
    },
    {
        id: 10,
        name: "American",
        description: "Indulge in classic American foods with immense flavor.",
        image: "Americanfood.webp",
    },
    {
        id: 11,
        name: "Korean",
        description: "Enjoy savory, spicy, flavorful, and traditional Korean dishes.",
        image: "Koreanfood.jpg",
    },
    {
        id: 12,
        name: "Turkish",
        description: "Discover the exotic and fresh flavors of Turkish cuisine.",
        image: "Turkishfood.webp",
    },
];

const Categories = () => {
    const navigate = useNavigate(); // Use navigate hook for redirection

    return (
        <div id="Categories">
            <p>Food Categories</p>
            <div className="CategoryCardContainer">
                {categories.map(category => (
                    <div className="CategoryCard" key={category.id}>
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                        <span>{category.description}</span>
                        <button>Explore</button>
                    </div>
                ))}
            </div>
            <div className="SeeMoreContainer">
                <button className="SeeMoreButton" onClick={() => navigate('/categories')}>
                    See More
                </button>
            </div>
        </div>
    );
};

export default Categories;
