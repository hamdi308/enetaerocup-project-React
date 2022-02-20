import React, { useState } from 'react';
import Navbar from '../navbar';
import Sidebar from '../Sidebar';
import HeroSection from '../heroSection';
import InfoSection from '../infoSection';
import { homeObjOne } from '../infoSection/Data';
import Services from '../Services';
import Footer from '../Footer';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (<>

        <Sidebar isOpen={isOpen} toggle={toggle} setIsOpen={ setIsOpen }/>
        <Navbar isOpen={isOpen} toggle={toggle} setIsOpen={setIsOpen} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Services />
        <Footer />
    </>
    );
};
export default Home;
