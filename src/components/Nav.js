import styled from 'styled-components';

function Nav() {
  return (
    <StyledNav>
      <Logo>hamidihekmat@gmail.com</Logo>
      <ul>
        <li>
          <h3>Projects</h3>
        </li>
        <li>
          <h3>Resume</h3>
        </li>
        <li>
          <h3>Contacts</h3>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 70%;
  margin: 15px auto;
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
  color: #d8d7da;
`;

export default Nav;
