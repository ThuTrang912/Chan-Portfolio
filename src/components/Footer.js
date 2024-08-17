import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
  AiOutlineFile,
} from 'react-icons/ai';
// eslint-disable-next-line
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nahc</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NAHC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ThuTrang912"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/thu.trang.912"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.careermap.jp/my_page/profile"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFile />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/chan.chawnf"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
