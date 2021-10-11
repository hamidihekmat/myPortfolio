import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

function Project({ darkMode, project }) {
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
            <Tool darkMode={darkMode} key={t.id}>
              {t.name}
            </Tool>
          ))}
        </div>
        <Flex>
          <a target={'_blank'} rel="noreferrer" href={project.live}>
            <Flex>
              <p>link</p>
              <AiOutlineLink size="2em" />
            </Flex>
          </a>
          <a target={'_blank'} rel="noreferrer" href={project.github}>
            {project.github ? (
              <Flex>
                <p>view code</p>
                <AiFillGithub size="2em" />
              </Flex>
            ) : (
              'Private'
            )}
          </a>
        </Flex>
      </div>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  margin: 3rem 0rem;
  overflow: hidden;
  display: flex;
  width: 100%;
  border: 1px solid #6b7280;
  height: 360px;
  @media (max-width: 530px) {
    height: 440px;
    width: 75vw;
  }

  p {
    letter-spacing: 1px;
  }
  h3 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 10px 5px;
    span {
      vertical-align: middle;
      display: inline-block;
    }
  }
  .project-image {
    overflow: hidden;
    width: 50%;
    img {
      filter: brightness(0.9);
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
    height: 320px;
    .project-image {
      display: none;
    }
    .project-content {
      width: 100%;
    }
  }
`;

const Tool = styled.span`
  display: block;
  border: 1px solid ${(props) => (props.darkMode ? 'white' : 'black')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  background: ${(props) => (props.darkMode ? 'black' : 'white')};
  padding: 0.3rem 0.5rem;
  margin: 1.5rem 5px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: flex-start;
  svg {
    padding-left: 3px;
  }
  p:hover {
    text-decoration: underline;
  }
`;

export default Project;
