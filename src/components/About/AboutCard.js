import React from 'react';
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line
import { ImPointRight } from 'react-icons/im';
import { FaMusic, FaPaw, FaBook } from 'react-icons/fa'; // Importing new icons

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="blue">NGUYEN THI THU TRANG</span>{' '}
            from <span className="blue">VIET NAM.</span>
            <br />
            I started learning programming in high school when I participated in
            the Robodnic competition.
            <br />
            I attended Danang University of Science and Technology for a year
            and engaged in various volunteer activities.
            <br />
            In 2019, I moved to Japan and began a new journey. Currently, I am
            an IT Development Research Student at ECC College of Multimedia.
            <br />
            <br />
            Apart from programming, here are some activities that I love:
          </p>
          <ActivityList
            activities={[
              { text: 'Playing the guitar and singing', icon: <FaMusic /> },
              {
                text: 'Watching videos of pandas and capybaras',
                icon: <FaPaw />,
              },
              { text: 'Learning new things', icon: <FaBook /> },
            ]}
          />
          <p className="blue">
            "Every step you take, no matter how small, is a step toward your
            dreams; keep moving forward and believe in the journey."
          </p>
          <footer className="blockquote-footer">CHAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

const ActivityList = ({ activities }) => (
  <ul>
    {activities.map((activity, index) => (
      <li key={index} className="about-activity">
        {activity.icon} {activity.text}
      </li>
    ))}
  </ul>
);

export default AboutCard;
