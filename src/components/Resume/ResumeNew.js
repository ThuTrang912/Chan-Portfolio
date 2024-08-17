import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/EntrySheet-MynaviBox.pdf'; // Đường dẫn tới tệp PDF
import { AiOutlineDownload } from 'react-icons/ai';

function ResumeNew() {
  return (
    <div style={{ height: '100vh' }}>
      <Container fluid className="resume-section" style={{ height: '100%' }}>
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank" // Mở tệp PDF trong tab mới
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{ height: 'calc(100% - 60px)', overflow: 'auto' }}
        >
          <iframe
            src={pdf}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="CV"
          />
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank" // Mở tệp PDF trong tab mới
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
