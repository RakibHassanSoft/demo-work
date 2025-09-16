
import './App.css'
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/Hero';
import OfferCards from './components/OfferCard/OfferCard';
import SolutionDetail from './components/SolutionDetail/SolutionDetail';
import Feature from './components/Feature/Feature';
import TopVendor from './components/TopVendor/TopVendor';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

const App = () => {
  return (
    <div>
      <div data-theme="light" className=' bg-white'>

      <Navbar/>
      </div>
      <HeroSection/>
      <OfferCards/>
      <SolutionDetail/>
      <Feature/>
     <TopVendor/>
     <FeaturedProducts/>
    </div>
  );
};

export default App;