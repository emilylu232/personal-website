import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

const Experiences = () => {
  const { experiences } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="experiences">
      <Container>
        <div className="experiences-wrapper">
          <Title title="Experiences" />
          {experiences.map((experiences) => {
            const { title, info, info2, info3, info4, info5, info6, id} = experiences;

            return (
              <Row key={id}>
                <Col md={40} sm={40}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="experiences-wrapper__text">
                      <h3 className="experiences-wrapper__text-title">{title || 'Experiences Title'}</h3>
                      <div>
                        <p>{info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                        <p className="mb-4">{info3 || ''}</p>
                        <p className="mb-4">{info4 || ''}</p>
                        <p className="mb-4">{info5 || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="40px"
                  >
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
