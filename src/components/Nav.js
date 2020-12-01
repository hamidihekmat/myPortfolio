import styled from 'styled-components';

function Nav({ darkMode, projectRef, contactRef }) {
  const scrollToProject = () => {
    projectRef.current.scrollIntoView();
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView();
  };
  return (
    <StyledNav>
      <Logo darkMode={darkMode}>hamidihekmat@gmail.com</Logo>
      <ul>
        <li onClick={scrollToProject}>
          <h3>Projects</h3>
        </li>
        <li>
          <h3>Resume</h3>
        </li>
        <li onClick={scrollToContact}>
          <h3>Contacts</h3>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  max-width: 1100px;
  width: 70%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 0rem 2rem;
      cursor: pointer;
    }
  }
`;

const Logo = styled.h3`
  font-family: 'Pacifico', cursive;
  color: ${(props) => (props.darkMode ? '#d8d7da' : '#374151k')};
`;

export default Nav;
