import styled from 'styled-components';
import ToggleDarkMode from './ToggleDarkMode';

function Nav({ darkMode, setDarkMode, projectRef, contactRef }) {
  const scrollToProject = () => {
    projectRef.current.scrollIntoView();
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView();
  };
  const openEmail = () => {
    window.open('mailto:hamidihekmat@gmail.com');
  };
  const downloadResume = () => {
    window.open(
      'https://raw.githubusercontent.com/hamidihekmat/myPortfolio/main/resume.pdf'
    );
  };
  return (
    <StyledNav>
      <Logo onClick={openEmail} darkMode={darkMode}>
        hekmat.hamidi
      </Logo>
      <Flex>
        <ul>
          <li onClick={scrollToProject}>
            <h3>.projects()</h3>
          </li>
          <li>
            <h3 onClick={downloadResume}>.resume()</h3>
          </li>
          <li onClick={scrollToContact}>
            <h3>.contacts()</h3>
          </li>
        </ul>
        <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </Flex>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  color: ${(props) => (props.darkMode ? '#ffffffs' : '#374151k')};
  min-height: 10vh;
  max-width: 1200px;
  width: 70%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.2rem;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0rem 2rem;
      cursor: pointer;
    }
  }

  @media (max-width: 530px) {
    justify-content: space-around;
    h3 {
      font-size: 0.8rem;
    }
  }
`;

const Logo = styled.h2`
  cursor: pointer;
  font-size: 2rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 530px) {
    width: 100vw;
    overflow-x: scroll;
  }
`;

export default Nav;
