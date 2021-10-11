import styled from 'styled-components';
import { Container } from '../styles';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

function Contacts({ contactRef }) {
  const openEmail = () => {
    window.open('mailto:hamidihekmat@gmail.com');
  };
  return (
    <ContactContainer ref={contactRef}>
      <h3 onClick={openEmail}>
        .email( <AiOutlineMail /> )
      </h3>

      <h3>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://github.com/hamidihekmat"
        >
          .github( <AiFillGithub /> )
        </a>
      </h3>

      <h3>
        <a
          target={'_blank'}
          rel="noreferrer"
          href="https://www.linkedin.com/in/hekmat-hamidi-53040518a/"
        >
          .linkedIn( <AiFillLinkedin /> )
        </a>
      </h3>
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
    font-size: 1.3rem;
    cursor: pointer;
  }
  @media (max-width: 530px) {
    h3 {
      font-size: 0.8rem;
    }
  }
`;

export default Contacts;
