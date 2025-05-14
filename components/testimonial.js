import React from 'react'


const Testimonial = () => {


  let words = {
    author2Position: 'CTO, Company XYZ',
    author1Position: 'CEO, Company ABC',
    author3Alt: 'Image of David Johnson',
    author1Name: 'John Doe',
    author1Src:
      'https://images.unsplash.com/photo-1691233123155-27bf011dc33f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
    author3Name: 'David Johnson',
    review2:
      'CyberSafe Angola has exceeded our expectations in terms of cybersecurity solutions. Their team is knowledgeable, responsive, and dedicated to keeping our systems safe.',
    author2Name: 'Jane Smith',
    author4Position: 'COO, Company ABCD',
    author4Name: 'Sarah Brown',
    author4Src:
      'https://images.unsplash.com/photo-1572988276585-71035689a285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
    author1Alt: 'Image of John Doe',
    author2Src:
      'https://images.unsplash.com/photo-1513682121497-80211f36a7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
    author3Src:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzIyODE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
    author2Alt: 'Image of Jane Smith',
    author4Alt: 'Image of Sarah Brown',
    content1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author3Position: 'CFO, Company 123',
    review1:
      'I am extremely satisfied with the cybersecurity services provided by CyberSafe Angola. They have helped us secure our systems and protect our data effectively.',
    heading1: 'Testemunhos',
    review3:
      'We have been working with CyberSafe Angola for several years now, and their expertise in cybersecurity has been invaluable to our organization. I highly recommend their services.',
    review4:
      'Choosing CyberSafe Angola as our cybersecurity partner was one of the best decisions we made. Their proactive approach to security has helped us prevent potential threats and secure our sensitive information.',
  }
  




  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container10">
            <h2 className="thq-heading-2">{words.heading1}</h2>
            <span className="testimonial-text11 thq-body-small">
              {words.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container12">
                    <img
                      alt={words.author1Alt}
                      src={words.author1Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container13">
                      <strong className="thq-body-large">
                        {words.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {words.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text14 thq-body-small">
                    {words.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container14">
                    <img
                      alt={words.author2Alt}
                      src={words.author2Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container15">
                      <strong className="thq-body-large">
                        {words.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {words.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text17 thq-body-small">
                    {words.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container16">
                    <img
                      alt={words.author3Alt}
                      src={words.author3Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container17">
                      <strong className="thq-body-large">
                        {words.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {words.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text20 thq-body-small">
                    {words.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card4"
                >
                  <div className="testimonial-container18">
                    <img
                      alt={words.author4Alt}
                      src={words.author4Src}
                      className="testimonial-image4"
                    />
                    <div className="testimonial-container19">
                      <strong className="thq-body-large">
                        {words.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {words.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text23 thq-body-small">
                    {words.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .testimonial-text11 {
            text-align: center;
          }
          .testimonial-container12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text14 {
            text-align: left;
          }
          .testimonial-container14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text17 {
            text-align: left;
          }
          .testimonial-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text20 {
            text-align: left;
          }
          .testimonial-container18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .testimonial-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text23 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
            .testimonial-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}



export default Testimonial
