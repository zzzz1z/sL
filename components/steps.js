import React from 'react'


const Steps = () => {

  const words = {
    step1Description:'Nesta Primeira fase, faz-se o levantamento máximo de informações possíveis sobre a infraestrutura. Isto inclui o mapeamento físico da rede e dos serviços prestados, os endereços físicos e virtuais, entre outros dados',
    step1Title: 'RECONHECIMENTO',


    step2Title: 'PENTESTING',
    step2Description: 'Nesta segunda fase, irá realizar-se análises de vulnerabilidades e testes de invasão usando as últimas tendências, aplicações web, aplicações mobile, APis e infraestrutura',   

    step3Title: 'EVIDÊNCIA E REPORTE',
    step3Description: 'Depois de ter identificado e coletado as vulnerabilidades do sistema, um relatório será gerado expondo todos esses pontos vulneráveis, os erros de segurança e os aspectos que prrecisam de melhoria',
    
    
    
    step4Description: 'Utilizar o relatório para extinguir ou diminuir as vulnerabilidades encontraddas no sistema, e testar para confirmar se as vulnerabilidades acabaram',
    step4Title: 'CORREÇÃO',
  }
  return (
    <>
      <div className="steps-container1 thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container2 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">
                Teste de penetração
              </h2>
              <p className="thq-body-large">
               O teste de penetração não deve ser limitado a um esforço único, deve ser parte 
               de um sistema de vigilância contínua para manter as organizações seguras
               por meio de vários tipos de testes
              </p>
              <div className="steps-actions">
                <button className="thq-button-animated thq-button-filled steps-button">
                  <span className="thq-body-small">Agendar </span>
                </button>
              </div>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{words.step1Title}</h2>
                <span className="steps-text14 thq-body-small">
                  {words.step1Description}
                </span>
                <h1 className="steps-text15 thq-heading-3">01</h1>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{words.step2Title}</h2>
                <span className="steps-text17 thq-body-small">
                  {words.step2Description}
                </span>
                <h1 className="steps-text18 thq-heading-3">02</h1>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{words.step3Title}</h2>
                <span className="steps-text20 thq-body-small">
                  {words.step3Description}
                </span>
                <h1 className="steps-text21 thq-heading-3">03</h1>
              </div>
              <div className="steps-container7 thq-card">
                <h2 className="thq-heading-2">{words.step4Title}</h2>
                <span className="steps-text23 thq-body-small">
                  {words.step4Description}
                </span>
                <h1 className="steps-text24 thq-heading-3">04</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .steps-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container2 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-layout-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text14 {
            text-align: center;
          }
          .steps-text15 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text17 {
            text-align: center;
          }
          .steps-text18 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-layout-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text20 {
            text-align: center;
          }
          .steps-text21 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text23 {
            text-align: center;
          }
          .steps-text24 {
            top: var(--dl-layout-space-unit);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-layout-space-twounits);
            }
            .steps-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
            .steps-container7 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}


export default Steps
