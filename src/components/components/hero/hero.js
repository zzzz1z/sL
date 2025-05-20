import React from 'react'


const Hero = () => {



  const words = {
    image3Src:
      'https://images.unsplash.com/photo-1611225085464-e43fe60a6634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0NXw&ixlib=rb-4.1.0&q=80&w=1080',
    image8Alt: 'Hero ',
    image2Src:
      'https://images.unsplash.com/photo-1626108846582-e92033b90b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
    image6Alt: 'Hero ',
    image11Src:
      'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
    image5Alt: 'Hero ',
    image1Alt: 'Cybersecurity in Angola',
    image7Src:
      'https://images.unsplash.com/photo-1616431688941-fee43c566442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0N3w&ixlib=rb-4.1.0&q=80&w=1080',
    image7Alt: 'Hero ',
    image12Alt: 'Hero ',
    image2Alt: 'Hero ',
    image6Src:
      'https://images.unsplash.com/photo-1590486243519-6f9aa5be39b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0N3w&ixlib=rb-4.1.0&q=80&w=1080',
    image12Src:
      'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0N3w&ixlib=rb-4.1.0&q=80&w=1080',
    image3Alt: 'Hero ',
    image9Src:
      'https://images.unsplash.com/photo-1518009638482-b4413c910451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
    image11Alt: 'Hero ',
    action2: 'Saber mais',
    action1: 'Começar',
    image8Src:
      'https://images.unsplash.com/photo-1636646931278-cf779e5acaac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
    image5Src:
      'https://images.unsplash.com/photo-1743172140481-5c7044dd23d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
    image4Src:
      'https://images.unsplash.com/photo-1506356605750-cba1163d24ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
    image10Alt: 'Hero ',
    image4Alt: 'Hero ',
    
    heading1: 'Seja Bem-vindo à Stack_Link',
    content1:
      'Mantenha-se à frente das ciberameaças com as nossas soluções de cibersegurança de última geração, personalizadas para empresas em Angola.',
    image10Src:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
    image9Alt: 'Hero ',
    image1Src:
      'https://images.unsplash.com/photo-1584433144697-205892243f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0OXw&ixlib=rb-4.1.0&q=80&w=1080',
  }



  return (
    <>
      <div className="hero-header78">
        <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{words.heading1}</h1>
            <p className="hero-text2 thq-body-large">{words.content1}</p>
          </div>
          <div className="hero-actions">
            <button className="thq-button-filled hero-button1">
              <span className="thq-body-small">{words.action1}</span>
            </button>
            <button className="thq-button-outline hero-button2">
              <span className="thq-body-small">{words.action2}</span>
            </button>
          </div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={words.image1Alt}
                src={words.image1Src}
                className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image2Alt}
                src={words.image2Src}
                className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image3Alt}
                src={words.image3Src}
                className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image4Alt}
                src={words.image4Src}
                className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image5Alt}
                src={words.image5Src}
                className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image6Alt}
                src={words.image6Src}
                className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={words.image1Alt}
                src={words.image1Src}
                className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image2Alt}
                src={words.image2Src}
                className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image3Alt}
                src={words.image3Src}
                className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image4Alt}
                src={words.image4Src}
                className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image5Alt}
                src={words.image5Src}
                className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={words.image7Alt}
                src={words.image7Src}
                className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image8Alt}
                src={words.image8Src}
                className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image9Alt}
                src={words.image9Src}
                className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image10Alt}
                src={words.image10Src}
                className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image11Alt}
                src={words.image11Src}
                className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image12Alt}
                src={words.image12Src}
                className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={words.image7Alt}
                src={words.image7Src}
                className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image8Alt}
                src={words.image8Src}
                className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image9Alt}
                src={words.image9Src}
                className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image10Alt}
                src={words.image10Src}
                className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={words.image11Alt}
                src={words.image11Src}
                className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt="Hero"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container2">
            <script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></script>
          </div>
        </div>
      </div>
      <style>
        {`
          .hero-header78 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-text2 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
          }
          .hero-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button1 {
              width: 100%;
            }
            .hero-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}


export default Hero
