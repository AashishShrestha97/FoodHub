import './index.css';
import Navbar from './Components/Navbar.jsx'; // Navbar for home
import Description from './Components/HomePage/Description.jsx'; // Home content
import Image1 from './Components/HomePage/Image1.jsx'; // Home image component
import Menu from './pages/Menu.jsx'; // Menu component
import Services from './pages/Services.jsx'; // Services component
import ContactUs from './Components/ContactUs.jsx';
import './Components/Navbar.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info1 from './Components/HomePage/Info1.jsx';
import Info2 from './Components/HomePage/Info2.jsx';
import Login from './Components/Login/Login.jsx';
import SignIn from './Components/Sign-In/SignIn.jsx';
import AboutUs from './pages/AboutUs.jsx';
import DiscountSection from './Components/HomePage/DiscountSection.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page - Renders Navbar, Description, and Image1 */}
        <Route path="/" element={
          <>
            <Navbar />
            <Description />
            <Image1 />
            <Info1 />
            <Info2 />
            <DiscountSection />
            <ContactUs />
          </>
        } />
        
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
