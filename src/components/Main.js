import styled from 'styled-components';
import { Container } from '../styles';
import Terminal from './Terminal';

function Main({ darkMode }) {
  return (
    <MainContainer>
      {/* <h1>&gt; About Me</h1> */}
      <h1>
        Hi, I'm Hekmat 👋 <br /> My passion is building beautiful web
        applications
      </h1>
      <Terminal darkMode={darkMode} />
    </MainContainer>
  );
}

const MainContainer = styled(Container)`
  margin: 3rem auto;
  h1 {
    font-size: 50px;
    color: #3182ce;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 2rem;
    padding: 1rem 0rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1122px) {
    h1 {
      font-size: 1.8rem;
      letter-spacing: 0;
    }
    h3 {
      font-size: 1rem;
      padding: 0.5rem 0rem;
    }
  }
`;

export default Main;
