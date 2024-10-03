import ContactUs from '../Components/ContactUs.jsx';
import PopularItems from '../Components/Menu/PopularItems.jsx';
import Description from '../Components/Menu/Description.jsx';
import Navbar from '../Components/Navbar.jsx'
import Categories from '../Components/Menu/Categories.jsx';

const Menu=()=>{
    return (
        <>
        <Navbar/>
        <Description/>
        <PopularItems />
        <Categories />
        <ContactUs />
        </>
    )
}

export default Menu;