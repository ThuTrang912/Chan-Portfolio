import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle'; // Ensure this component exists
import AboutCard from './AboutCard'; // Ensure this component exists
import laptopImg from '../../Assets/dev_focus.svg'; // Ensure the image path is correct
import mapImg from '../../Assets/person-map3.png'; // Ensure the image path is correct
import './../../style.css'; // Ensure this file exists

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col md={7} className="about-col">
            <h1 className="project-heading">
              Know Who <strong className="blue">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-img" style={{ marginTop: '100px' }}>
            <img src={mapImg} alt="About" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Add a margin or padding to create space */}
      <Container className="section-spacing">
        <Row>
          <Col md={7} className="about-col">
            <h1 className="project-heading">
              My <strong className="blue">Skill Set</strong>
            </h1>
            <SkillSet />
          </Col>
          <Col md={5} className="about-img" style={{ marginTop: '50px' }}>
            <img src={laptopImg} alt="About" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Add GitHub component if needed */}
      {/* <Github /> */}
    </Container>
  );
};
// eslint-disable-next-line
const SectionHeading = ({ title, highlight }) => (
  <h1 className="project-heading">
    {title} <strong className="blue">{highlight}</strong>
  </h1>
);

const SkillSet = () => (
  <div>
    <table>
      <tr>
        <td valign="top" width="33%">
          <h3>Languages</h3>
          <div align="center">
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/c-original.svg"
                alt="C"
                height="50"
              />
            </a>
            <a
              href="https://www.cplusplus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg"
                alt="C++"
                height="50"
              />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/HTML5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                alt="HTML5"
                height="50"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                alt="CSS3"
                height="50"
              />
            </a>
            <a
              href="https://www.java.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
                alt="Java"
                height="50"
              />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                alt="JavaScript"
                height="50"
              />
            </a>
            <a
              href="https://www.php.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/php-original.svg"
                alt="PHP"
                height="50"
              />
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
                alt="Python"
                height="50"
              />
            </a>
            <a
              href="https://dart.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg"
                alt="Dart"
                height="50"
              />
            </a>
            <a
              href="https://kotlinlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/kotlinlang-icon.svg"
                alt="Kotlin"
                height="50"
              />
            </a>
          </div>
        </td>
        <td valign="top" width="33%">
          <h3>Frameworks, Platforms & Libraries</h3>
          <div align="center">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                alt="React"
                height="50"
              />
            </a>
            <a
              href="https://laravel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg"
                alt="Laravel"
                height="50"
              />
            </a>
            <a
              href="https://spring.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/springio-icon.svg"
                alt="Spring"
                height="50"
              />
            </a>
            <a
              href="https://www.android.com/intl/en_in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg"
                alt="Android"
                height="50"
              />
            </a>
            <a
              href="https://flutter.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg"
                alt="Flutter"
                height="50"
              />
            </a>
            <a
              href="https://www.tensorflow.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/tensorflow-icon.svg"
                alt="TensorFlow"
                height="50"
              />
            </a>
            <a
              href="https://opencv.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/opencv-icon.svg"
                alt="OpenCV"
                height="50"
              />
            </a>
            <a
              href="https://www.raspberrypi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/raspberrypi.png"
                alt="Raspberry Pi"
                height="50"
              />
            </a>
            <a
              href="https://www.arduino.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/arduino.png"
                alt="Arduino"
                height="50"
              />
            </a>
          </div>
        </td>
        <td valign="top" width="33%">
          <h3>DevOps</h3>
          <div align="center">
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg"
                alt="AWS"
                height="50"
              />
            </a>
            <a
              href="https://www.linux.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/linux-original.svg"
                alt="Linux"
                height="50"
              />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
                alt="Git"
                height="50"
              />
            </a>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ margin: '10px' }}
                src="https://profilinator.rishav.dev/skills-assets/firebase.png"
                alt="Firebase"
                height="50"
              />
            </a>
            {/* Add more DevOps tools as needed */}
          </div>
        </td>
      </tr>
    </table>
  </div>
);

export default About;
