import Recipe from "../Components/Categories/Description-Recipe";
import Card from "../Components/Categories/FirstCard";
import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";

const Categories=()=>{
    return(
        <>
        <Navbar/>
        <Card/>
        <Recipe />
        <ContactUs/>
        </>
    )
}

export default Categories;