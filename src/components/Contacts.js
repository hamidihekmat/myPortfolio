import styled from 'styled-components';
import { Container } from '../styles';

function Contacts({ contactRef }) {
  const openEmail = () => {
    window.open('mailto:hamidihekmat@gmail.com');
  };
  return (
    <ContactContainer ref={contactRef}>
      <h3 onClick={openEmail}>hamidihekmat@gmail.com</h3>
      <h3>.</h3>
      <h3>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://github.com/hamidihekmat"
        >
          Github
        </a>
      </h3>
      <h3>.</h3>
      <h3>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.linkedin.com/in/hekmat-hamidi-53040518a/"
        >
          LinkedIn
        </a>
      </h3>
    </ContactContainer>
  );
}

const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
  height: 10vh;
  width: 50%;
  padding: 1rem 2rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  h3 {
    font-family: 'Pacifico';
    margin: 0 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  @media (max-width: 530px) {
    h3 {
      font-size: 0.8rem;
    }
  }
`;

export default Contacts;
