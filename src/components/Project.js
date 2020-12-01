import styled from 'styled-components';
import { motion } from 'framer-motion';

function Project({ project }) {
  return (
    <StyledProject>
      <div className="project-image">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={project.image}
          alt={project.name}
        />
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tools">
          {project.tools.map((t) => (
            <Tool key={t.id}>{t.name}</Tool>
          ))}
        </div>
        <div className="buttons">
          <a target={'_blank'} rel="noreferrer" href={project.live}>
            Live
          </a>
          <a target={'_blank'} rel="noreferrer" href={project.github}>
            Github
          </a>
        </div>
      </div>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  margin: 3rem 0rem;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 360px;
  -moz-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? '#222831' : 'white')};
  -webkit-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? '#222831' : 'white')};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h3 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
    border: 1px solid #5a5d7a;
    padding: 0.5rem 1rem;
    margin: 10px 5px;
    border-radius: 15px;
  }
  .project-image {
    overflow: hidden;
    width: 50%;
    img {
      filter: brightness(0.8);
    }
  }
  .project-content {
    display: flex;
    width: 50%;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h3 {
      padding: 0.5rem 0rem;
    }
    .tools {
      display: flex;
    }
  }
  @media (max-width: 900px) {
    height: 300px;
    .project-image {
      display: none;
    }
    .project-content {
      width: 100%;
    }
  }
  @media (max-width: 660px) {
    height: 430px;
  }
`;

const Tool = styled.span`
  display: block;
  border: 1px solid #d8d7da;
  padding: 0.3rem 0.5rem;
  margin: 1rem 5px;
`;

export default Project;
