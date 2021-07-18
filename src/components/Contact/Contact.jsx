import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { tel, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contactez moi" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {email}
            </p>
            <p className="contact-wrapper__text">
              {tel}
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
