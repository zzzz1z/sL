import React from 'react'


const Contact = () => {

  const words = {
    content2: 'Fale connosco hoje!',
    email1: 'info@stklnk.com',
    address1: 'Projeto Nova Vida, rua 40, Luanda, Angola',
    content3:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
    content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    content4:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
    heading1: 'Contacte-nos',
    content5:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
    phone1: '+244 925 868 401',
  }
  return (
    <>
      <div className="contact-contact20 thq-section-padding">
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-section-title">
            <span className="thq-body-small">{words.content2}</span>
            <div className="contact-content1">
              <h2 className="thq-heading-2">{words.heading1}</h2>
              <p className="contact-text3 thq-body-large">{words.content1}</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-content2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact-contact-info1">
                <div className="contact-content3">
                  <h3 className="contact-text4 thq-heading-3">Endereço de Email</h3>
                  <p className="contact-text5 thq-body-large">
                    {words.content3}
                  </p>
                </div>
                <span className="contact-email thq-body-small">
                  {words.email1}
                </span>
              </div>
            </div>
            <div className="contact-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact-contact-info2">
                <div className="contact-content5">
                  <h3 className="contact-text6 thq-heading-3">Telefone</h3>
                  <p className="contact-text7 thq-body-large">
                    {words.content4}
                  </p>
                </div>
                <span className="contact-phone thq-body-small">
                  {words.phone1}
                </span>
              </div>
            </div>
            <div className="contact-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact-contact-info3">
                <div className="contact-content7">
                  <h3 className="contact-text8 thq-heading-3">Escritório</h3>
                  <p className="contact-text9 thq-body-large">
                    {words.content5}
                  </p>
                </div>
                <span className="contact-address thq-body-small">
                  {words.address1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style >
        {`
          .contact-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-max-width {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-section-title {
            gap: var(--dl-layout-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-text3 {
            text-align: center;
          }
          .contact-row {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text4 {
            align-self: stretch;
            text-align: center;
          }
          .contact-text5 {
            text-align: center;
          }
          .contact-email {
            text-align: center;
          }
          .contact-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text6 {
            align-self: stretch;
            text-align: center;
          }
          .contact-text7 {
            text-align: center;
          }
          .contact-phone {
            text-align: center;
          }
          .contact-content6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text8 {
            align-self: stretch;
            text-align: center;
          }
          .contact-text9 {
            text-align: center;
          }
          .contact-address {
            text-align: center;
          }
          @media (max-width: 767px) {
            .contact-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact-row {
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}



export default Contact
