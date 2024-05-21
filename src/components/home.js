import '../App.css';
import Header from './header/header'
import Body from './body/body'
import Footer from './footer/footer'
import React, { useState, useEffect } from 'react';
import Loading from './Loading';


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
    <>
     <Header/>
      <div className='Page'>
    
        <Body/>
    
      </div>
     <Footer/>
    </>
    )}
    </>

    
    
    
  );
}

export default Home;