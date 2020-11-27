import styled from 'styled-components';
import { Container } from '../styles';
import Terminal from './Terminal';

function Main() {
  return (
    <MainContainer>
      <h1>&gt; Hekmat Hamidi</h1>
      <h3>
        Hi, 👋 I am a web developer. My passion is building beautiful
        <br />
        web applications
      </h3>
      <Terminal />
    </MainContainer>
  );
}

const MainContainer = styled(Container)`
  height: 90vh;
  h1 {
    margin-top: 4.5rem 0px;
    letter-spacing: 4px;
  }

  @media screen and (max-width: 1122px) {
    h1 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      letter-spacing: 0;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export default Main;
