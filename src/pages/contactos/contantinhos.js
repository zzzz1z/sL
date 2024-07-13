import React, { useState, useEffect } from 'react';
import './contantinhos.css'
import Header from '../../components/header/header'
import Contactos from './components/contactos'
import Footer from '../../components/footer/footer'
import Loading from '../../components/Loading';

const Contantinhos = () => {
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
       <Contactos/>
       <Footer/>
       
       
      </>


    )}</>
    
  )
}

export default Contantinhos
