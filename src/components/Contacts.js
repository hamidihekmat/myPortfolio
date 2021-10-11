import styled from 'styled-components';
import { Container } from '../styles';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

function Contacts({ contactRef }) {
  const openEmail = () => {
    window.open('mailto:hamidihekmat@gmail.com');
  };
  return (
    <ContactContainer ref={contactRef}>
      <h3 onClick={openEmail}>hamidihekmat@gmail.com</h3>
      <AiOutlineMail size="1.2em" />
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
      <AiFillGithub size="1.2em" />
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
      <AiFillLinkedin size="2em" />
    </ContactContainer>
  );
}

const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 50%;
  margin: auto;
  a {
    text-decoration: none;
    color: inherit;
  }
  h3 {
    margin: 0 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (max-width: 530px) {
    h3 {
      font-size: 0.8rem;
    }
  }
`;

export default Contacts;
