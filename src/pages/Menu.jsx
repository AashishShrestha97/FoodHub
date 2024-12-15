import Description from '../Components/Menu/Description.jsx';
import Navbar from '../Components/Navbar.jsx'
import Categories from '../Components/Menu/MenuCategories.jsx';
import Discount from '../Components/Menu/Discount.jsx';
import ContactUsMenu from '../Components/Menu/ContactUs_Menu.jsx';

const Menu=()=>{
    return (
        <>
        <Navbar/>
        <Description/>
        <Categories />
        <Discount />
        <ContactUsMenu />
        </>
    )
}

export default Menu;