import '../App.css';
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import './home.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Features1 from './components/features/features1/features1'
import Cta from './components/cta/cta'
import Features2 from './components/features/features2/features2'
import Steps from './components/steps/steps'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function Home() {
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  

  return (
    <>

    {isLoading ? (
      <Loading />
    ) : (
      // Your application content goes here
      <div className="home-container">
      
        <Navbar></Navbar>
        <Hero></Hero>
        <Features1></Features1>
        <Cta></Cta>
        <Features2></Features2>
        <Steps></Steps>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
     
    )}
    </>

    
    
    
  );
}

export default Home;