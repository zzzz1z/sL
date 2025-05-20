import React from 'react'
import './cta.css'


const Cta = () => {

  const words = {
    heading1: 'Proteja o seu negócio com as nossas soluções de cibersegurança',
    content1:
    "Proteja os dados e operações da sua empresa com os nossos serviços de cibersegurança de ponta, adaptados a todos os tipos de negócios",
    action1: 'Começar',
  }
  
  return (
    
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="thq-heading-2">{words.heading1}</span>
                  <p className="thq-body-large">{words.content1}</p>
                </div>
                <div className="cta-actions">
                  <button
                    type="button"
                    className="thq-button-filled cta-button"
                  >
                    {words.action1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
  )
}



export default Cta
