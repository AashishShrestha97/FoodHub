import Recipe from "../Components/Categories/Description-Recipe";
import PopularItems from "../Components/Menu/PopularItems";
import Card from "../Components/Categories/FirstCard";
import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";

const Categories=()=>{
    return(
        <>
        <Navbar/>
        <Card/>
        <Recipe />
        <PopularItems />
        <ContactUs/>
        </>
    )
}

export default Categories;