import ContactUs from '../Components/ContactUs.jsx';
import PopularItems from '../Components/Menu/PopularItems.jsx';
import Description from '../Components/Menu/Description.jsx';
import Navbar from '../Components/Navbar.jsx'

const Menu=()=>{
    return (
        <>
        <Navbar/>
        <Description/>
        <PopularItems />
        <ContactUs />
        </>
    )
}

export default Menu;