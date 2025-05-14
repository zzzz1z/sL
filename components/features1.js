import { useState } from "react"

const Features1 = () => {



  const [activeTab, setActiveTab] = useState(0)


  const words = {
   
    feature1Title: 'Medidas de Segurança Robustas',        
    feature1Description: 'Implementamos autenticação multifator (MFA), proteção avançada de endpoints, monitoramento contínuo de ameaças, gestão de acessos, criptografia de dados, firewalls de última geração e respostas automáticas a incidentes para garantir máxima segurança cibernética.',

    feature1ImgSrc:
      'https://images.ctfassets.net/5i1m3im8l2b5/6paFtEThrNIH5aXug9Dekb/a4feb0eff024b62c6d34f1ac5e472c60/Cybersecurity_Trends_2025.jpg?w=1200&h=630&fl=progressive&q=50&fm=jpg',
    feature1ImgAlt: 'Cybersecurity Shield Icon',



    feature2Title: 'Alertas de Segurança em Tempo Real',
    feature2Description: 'Fornecemos alertas de segurança em tempo real que monitorizam continuamente a atividade da rede, detetam comportamentos suspeitos e acionam notificações imediatas, permitindo uma resposta rápida a incidentes e minimizando ameaças antes que causem danos.',
    feature2ImgSrc:
      'https://www.briefcam.com/wp-content/uploads/2023/04/real-time-security-scaled.jpeg',
    feature2ImgAlt: 'Threat Detection Icon',



    feature3Title: 'Proteção Contínua',
    feature3Description: 'Oferecemos proteção contínua que garante a vigilância constante dos sistemas, detectando e neutralizando ameaças em tempo real. Nossa abordagem proativa assegura que a segurança esteja sempre atualizada, minimizando riscos e mantendo a integridade dos dados.',
    feature3ImgAlt: 'Security Monitoring Icon',
    feature3ImgSrc:
      'https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=',

    
    
    
  }
  return (
    <>
      <div className="thq-section-padding">
        <div className="features1-container2 thq-section-max-width">
          <div className="features1-image-container">
            {activeTab === 0 && (
              <img
                alt={words.feature1ImgAlt}
                src={words.feature1ImgSrc}
                className="features1-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={words.feature2ImgAlt}
                src={words.feature2ImgSrc}
                className="features1-image2 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={words.feature3ImgAlt}
                src={words.feature3ImgSrc}
                className="features1-image3 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features1-tabs-menu">



            <button
              onClick={() => setActiveTab(0)}
              className="features1-tab-horizontal1"
            >
              <div className="features1-divider-container1">
                {activeTab === 0 && (
                  <div className="features1-container3"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="thq-heading-2">{words.feature1Title}</h2>
                <span className="thq-body-small">
                  {words.feature1Description}
                </span>
              </div>
            </button>


            <button
              onClick={() => setActiveTab(1)}
              className="features1-tab-horizontal2"
            >
              <div className="features1-divider-container2">
                {activeTab === 1 && (
                  <div className="features1-container4"></div>
                )}
              </div>
              <div className="features1-content2">
                <h2 className="thq-heading-2">{words.feature2Title}</h2>
                <span className="thq-body-small">
                  {words.feature2Description}
                </span>
              </div>
            </button>


            <button
              onClick={() => setActiveTab(2)}
              className="features1-tab-horizontal3"
            >
              <div className="features1-divider-container3">
                {activeTab === 2 && (
                  <div className="features1-container5"></div>
                )}
              </div>
              <div className="features1-content3">
                <h2 className="thq-heading-2">{words.feature3Title}</h2>
                <span className="thq-body-small">
                  {words.feature3Description}
                </span>
              </div>
            </button>



          </div>
        </div>
      </div>
      <style>
        {`
          .features1-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-layout-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features1-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features1-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-image3 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features1-tabs-menu {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal1 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal2 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features1-tab-horizontal3 {
            gap: var(--dl-layout-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-divider-container3 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-container5 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features1-content3 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .features1-container2 {
              grid-gap: var(--dl-layout-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}



export default Features1
