import styled from "styled-components";

function Terminal({ darkMode }) {
  return (
    <StyledTerminal darkMode={darkMode}>
      <TopBar>
        <span className='red' />
        <span className='yellow' />
        <span className='green' />
      </TopBar>
      <Infos>
        <div className='info'>
          <p>&gt; Hekmat.currentLocation</p>
          <p className='info-ans'>"Richmond Hill, ON"</p>
        </div>
        <div className='info'>
          <p>&gt; Hekmat.contactInfo</p>
          <p>
            [<Highlight>"hamidihekmat@gmail.com"</Highlight>,
            <Highlight>"linkedIn"</Highlight>,<Highlight>"github"</Highlight>]
          </p>
        </div>
        <div className='info'>
          <p>&gt; Hekmat.resume</p>
          <Highlight>"hamidihekmat@gmail.com</Highlight>
        </div>
        <div className='info'>
          <p>&gt; Hekmat.interests</p>
          <p className='info-ans'>
            ["working out 💪", "watching movies 🍿", "coding 👨‍💻"]
          </p>
        </div>
        <div className='info'>
          <p>&gt; Hekmat.skills</p>
          <p className='info-ans'>
            ["javascipt", "python", "c++", "mySQL", "mongoDB", "React", "git",
            "Sass", "Node", "Styled Components"]
          </p>
        </div>
        <div className='info'>
          <p>&gt;</p>
        </div>
      </Infos>
    </StyledTerminal>
  );
}

const StyledTerminal = styled.div`
  margin: 1.5rem auto;
  overflow: hidden;
  background: #5a5d7a;
  width: 100%;
  min-height: 400px;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  -moz-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? "#222831" : "white")};
  -webkit-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? "#222831" : "white")};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TopBar = styled.div`
  background: #d8d7da;
  height: 2rem;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  display: flex;
  align-items: center;
  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    margin: 3px 5px;
  }
  .red {
    background: #f76156;
  }
  .yellow {
    background: #f8bc3d;
  }
  .green {
    background: #33c948;
  }
`;

const Infos = styled.div`
  color: #d8d7da;
  padding: 0rem 1.5rem;
  .info {
    padding: 0.5rem 0rem;
  }
  .info > p {
    margin: 2px 0px;
    overflow: hidden;
  }
  .info-ans {
    color: #afa380;
  }
`;

const Highlight = styled.span`
  color: #46b5c1;
`;

export default Terminal;
