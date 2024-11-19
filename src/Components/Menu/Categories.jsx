import React from "react";
import '../Menu/Categories.css';

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
        description: "Savor the tastes of traditional Chinese cuisine.",
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
        description: "Indulge in classic American comfort foods.",
        image: "Americanfood.webp",
    },
    {
        id: 11,
        name: "Korean",
        description: "Enjoy savory, spicy, and flavorful Korean dishes.",
        image: "Koreanfood.jpg",
    },
    {
        id: 12,
        name: "Turkish",
        description: "Discover the exotic flavors of Turkish cuisine.",
        image: "Turkishfood.webp",
    },
];

const Categories = () => {
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
        </div>
    );
};

export default Categories;
