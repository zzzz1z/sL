/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './contactos.css'
import imagem from './images/cron.jpg'

const Contactos = () => {


  
  return (
    <>

    <img src={imagem} className='cronograma' alt=''
   
    />
      
    <div className='con'>
      <div className='loc'>
        <div className='map'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.8975116704626!2d13.225891453172814!3d-8.898639952444064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f450d9cd2fb7%3A0x3d64e46640b7eda7!2sNova%20Vida%2C%20Luanda%2C%20Angola!5e0!3m2!1sen!2spt!4v1716308849277!5m2!1sen!2spt" width="250" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          

        </div>

        <div className='street'>
         Projeto Nova Vida, rua 40, Luanda, Angola
        </div>

      </div>

      <div className='cont'>

        <div className='find'>
          <h2>Contactos:</h2>

        </div>


        <ul className='lis'>
          <li>+244 925 868 401</li>
          <li>+244 953 635 492</li>
          <li>info@stklnk.com </li>
          <li><a href='/'>www.stack-link.com</a></li>
        </ul>
      </div>


      

         
    </div>

    
   </>
  )
}

export default Contactos;
