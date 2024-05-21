

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Info from '../About/components/info'
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';

const About = () => {

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
    <>
     
     <div className='Page'>
       <Header/>
       <Info/>
       <Footer/>
     </div>
    
     
    </>
  )}
    
    </>
    
  )
}

export default About
