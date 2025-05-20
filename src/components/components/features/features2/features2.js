import React, { useState } from 'react'
import './features2.css'


const Features2 = () => {
  const [activeTab, setActiveTab] = useState(0)

  const words = {
   
    
    feature1ImgAlt: 'feature 1',
    feature1Description:
      'Controlo das permissões de usuários, garantindo acesso seguro e restrito a dados e sistemas sensíveis.',
    feature1Title: 'Gestão de Acessos',
    feature1ImgSrc:
      'https://media.licdn.com/dms/image/v2/C4D12AQGXx9vwj-SSKQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1522112143199?e=2147483647&v=beta&t=6AnnSSMfEEVKf67psNHxGFrEta7Cy26AADxgCcElrJc',
    


    feature2Title: 'Modernização Tecnológica',
    feature2Description:'Atualização e aprimoramento de sistemas e infraestrutura para garantir eficiência, segurança e inovação contínua.',
    feature2ImgAlt: 'Illustration of Advanced Threat Detection',
    feature2ImgSrc:
      'https://media.istockphoto.com/id/1391408732/pt/vetorial/digital-transformation-digitization-of-business-processes-and-modern-technology-wireframe.jpg?s=612x612&w=0&k=20&c=lszqn4eQ3aAuE8hSf2kf--JAwOC6hyaHSnFTgClVfRE=',
  
   feature3Description:
      'implementação de soluções para defender a infraestrutura de TI contra acessos não autorizados, ataques e vulnerabilidades.',
    feature3ImgSrc:
      'https://img.freepik.com/free-vector/cyber-security-concept_23-2148543851.jpg',
    feature3ImgAlt: 'image',
    feature3Title: ' Protecção de Rede',
  
  
  
  
  
    }
  
  return (
    
      <div className="thq-section-padding">
        <div className="features2-container2 thq-section-max-width">
          <div className="features2-tabs-menu">


            <button
              onClick={() => setActiveTab(0)}
              className="features2-tab-horizontal1"
            >
              <div className="features2-divider-container1">
                {activeTab === 0 && (
                  <div className="features2-container3"></div>
                )}
              </div>
              <div className="features2-content1">
                <h2 className="thq-heading-2">{words.feature1Title}</h2>
                <span className="thq-body-small">
                  {words.feature1Description}
                </span>
              </div>
            </button>



            <button
              onClick={() => setActiveTab(1)}
              className="features2-tab-horizontal2"
            >
              <div className="features2-divider-container2">
                {activeTab === 1 && (
                  <div className="features2-container4"></div>
                )}
              </div>
              <div className="features2-content2">
                <h2 className="thq-heading-2">{words.feature2Title}</h2>
                <span className="thq-body-small">
                  {words.feature2Description}
                </span>
              </div>
            </button>



            <button
              onClick={() => setActiveTab(2)}
              className="features2-tab-horizontal3"
            >
              <div className="features2-divider-container3">
                {activeTab === 2 && (
                  <div className="features2-container5"></div>
                )}
              </div>
              <div className="features2-content3">
                <h2 className="thq-heading-2">{words.feature3Title}</h2>
                <span className="thq-body-small">
                  {words.feature3Description}
                </span>
              </div>
            </button>




          </div>
          <div className="features2-image-container">
            {activeTab === 0 && (
              <img
                alt={words.feature1ImgAlt}
                src={words.feature1ImgSrc}
                className="features2-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={words.feature2ImgAlt}
                src={words.feature2ImgSrc}
                className="features2-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={words.feature3ImgAlt}
                src={words.feature3ImgSrc}
                className="features2-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      
    
  )
}



export default Features2
