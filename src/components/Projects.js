import Project from './Project';
import { Container } from '../styles';
import styled from 'styled-components';
import { projectDetails } from '../projectDetails';

function Projects({ projectRef }) {
  return (
    <StyledProjects ref={projectRef}>
      <h1>&gt; Projects</h1>
      {projectDetails.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </StyledProjects>
  );
}

const StyledProjects = styled(Container)`
  margin-top: 10rem;
  h1 {
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1122px) {
    h1 {
      font-size: 1.8rem;
      letter-spacing: 0;
    }
  }
`;

export default Projects;
