import Recipe from "../Components/Categories/Description-Recipe";
import PopularItems from "../Components/Menu/PopularItems";
import ContactUs from "../Components/ContactUs";
import Navbar from "../Components/Navbar";

const Categories=()=>{
    return(
        <>
        <Navbar/>
        <Recipe />
        <PopularItems />
        
        <ContactUs/>
        </>
    )
}

export default Categories;