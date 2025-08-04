import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import MeiMei from './MeiMei';
import XCloset from './XCloset';
import SmartTripod from './SmartTripod';
import ECCMemo from './ECCMemo';
import MemoryGame from './MemoryGame';
import HydroCare from './HydroCare';
import Manabi from './Manabi';

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
              imgPath={require('./../../Assets/manabi.png')}
              isBlog={false}
              title="Manabi"
              description="Manabi is a web app designed for vocabulary learning using flashcards, combined with pronunciation audio and AI-powered categorization. It helps users enhance their language skills by listening to correct pronunciations and organizing words efficiently through intelligent classification."
              ghLink="https://github.com/ThuTrang912/Manabi"
              detailComponent={<Manabi />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/hydrocare.png')}
              isBlog={false}
              title="HydroCare"
              description="HydroCare helps users manage daily water intake, providing reminders, tracking, and health insights for optimal hydration."
              ghLink="https://github.com/ThuTrang912/HydroCare"
              detailComponent={<HydroCare />}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/smartTripod2.png')}
              isBlog={false}
              title="SmartTripod"
              description="The AI-based automatic tracking camera system reduces the burden of manual operation in capturing sports."
              ghLink="https://github.com/ThuTrang912/SmartTripod"
              detailComponent={<SmartTripod />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require('./../../Assets/xcloset.png')}
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
