import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.png';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
  AiOutlineFile, // Thêm biểu tượng file
} from 'react-icons/ai';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, and I believe I've learned quite
              a bit along the way… 🤷‍♂️
              <br />
              <br />I have learned and applied programming languages such as
              <i>
                <b className="blue">
                  {' '}
                  Java, C++, PHP, JavaScript, Python and Dart.{' '}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are developing
              <i>
                <b className="blue">
                  Software such as Web Apps and Mobile Apps
                </b>{' '}
                and I am especially interested in integrating
                <b className="blue">IoT and AI.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for product development
              using various <b className="blue">Frameworks </b> and
              <i>
                <b className="blue">Technologies </b>
              </i>
              like
              <i>
                <b className="blue">React.js and Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ThuTrang912"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thu.trang.912"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.careermap.jp/my_page/profile" // Đường dẫn đến trang Career Map
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFile />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/chan.chawnf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
