import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import MeiMei from './MeiMei';
import XCloset from './XCloset';
import SmartTripod from './SmartTripod';
import ECCMemo from './ECCMemo';
import MemoryGame from './MemoryGame';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I'm working on.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/SmartTripod.png')}
              isBlog={false}
              title="SmartTripod"
              description="The AI-based automatic tracking camera system reduces the burden of manual operation in capturing sports."
              ghLink="https://github.com/ThuTrang912/SmartTripod"
              detailComponent={<SmartTripod />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/XCloset.png')}
              isBlog={false}
              title="XCloset"
              description="The closet management application effectively addresses the tracking and usage of clothing."
              ghLink="https://github.com/ThuTrang912/XCloset"
              detailComponent={<XCloset />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/MeiMei.png')}
              isBlog={false}
              title="MeiMei"
              description="NFC business cards eliminate the hassle of carrying multiple paper cards and reduce printing costs."
              ghLink="https://github.com/ThuTrang912/MeiMei"
              detailComponent={<MeiMei />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/ECCMemo.png')}
              isBlog={false}
              title="ECC Memo"
              description="The Memo Android application features Firebase authentication and note management."
              ghLink="https://github.com/ThuTrang912/ECC-Memo"
              detailComponent={<ECCMemo />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/MemoryGame.png')}
              isBlog={false}
              title="Memory Game"
              description="The Memory Game is a fun matching game for all ages that enhances memory skills."
              ghLink="https://github.com/ThuTrang912/Memory-Game"
              detailComponent={<MemoryGame />}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
