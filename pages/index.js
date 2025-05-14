import React from 'react'
import Head from 'next/head'


import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import Cta from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Stack Link</title>
        </Head>
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
      <style>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
