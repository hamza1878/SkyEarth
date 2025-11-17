import React, { useState } from 'react'
import { NavbarTravel } from './Navbar.jsx';
import { HeroSection } from "./HeroSection.jsx";
import FeaturedDestinations from './FeaturedDestinations.jsx';
import TravelOffers  from './TravelOffre.jsx';
import Footer from './Footer.jsx';
import WhyChooseUs from './why.jsx';


export default function All() {
  const destinations = [
     {
      id: '1',
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      offersCount: 25,
    },
  ];

  return (
    <div><NavbarTravel/>
    <HeroSection/><FeaturedDestinations destinations={destinations}/>
    <TravelOffers/>
    <WhyChooseUs/>
    <Footer/>

     
    </div>
  )
}