// src/Projects/MeiMei.js
import React from 'react';

const MeiMei = () => {
  return (
    <div>
      <h2>MeiMei</h2>
      <img
        src={require('./../../Assets/MeiMei.png')}
        alt="MeiMei Project"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        NFC business cards eliminate the hassle of carrying multiple paper cards
        and reduce printing costs.
      </p>
      <p>
        Users register the card via an app and share information by simply
        tapping it. The cards allow for easy updates, storage, and organization
        of details.
      </p>
      <p>
        Benefits include cost savings, enhanced security with encrypted data,
        and convenience in managing connections, making it an efficient solution
        for modern networking.
      </p>

      <h3>Interface Overview and Usage Description</h3>
      <p>The application interface includes key functionalities such as:</p>
      <ul>
        <li>
          <strong>Register NFC Card:</strong> Users can register their NFC card
          through the app.
        </li>
        <li>
          <strong>Share Information:</strong> Information can be shared by
          tapping the NFC card.
        </li>
        <li>
          <strong>Manage Information:</strong> All interactions are stored in
          the app, allowing users to view and organize their cards.
        </li>
      </ul>

      <h4>App Interface</h4>
      <img
        src="https://github.com/user-attachments/assets/915a3bfe-1f99-4a57-9324-219809b12b5a"
        style={{ width: '50%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        alt="MeiMei UI"
      />
      <h4>User Interface</h4>
      <img
        src="https://github.com/ThuTrang912/MeiMei/assets/129019073/9ac9863e-6959-4e6b-8cb1-73375855f521"
        style={{ width: '50%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        alt="User Side"
      />
      <h4>Admin Interface</h4>
      <img
        src="https://github.com/user-attachments/assets/a73ec86d-17cd-41ec-9c04-21d81617ea7b"
        style={{ width: '50%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        alt="Admin Side"
      />
      <h3>Demo Video</h3>
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '400px', // hoặc 500px tùy ý
        margin: '20px auto',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <video
          controls
          style={{ width: '100%', height: 'auto' }}
          poster={require('./../../Assets/MeiMei.png')}
        >
          <source src="https://github.com/user-attachments/assets/87214c87-2848-4559-a67b-494de2ab4722" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3>Technologies Used</h3>
      <ul>
        <li>Figma</li>
        <li>Laravel (PHP)</li>
        <li>React (JavaScript)</li>
        <li>MySQL</li>
        <li>AWS</li>
      </ul>

      <h3>Team Product</h3>
      <p>As a team member, I was responsible for:</p>
      <ul>
        <li>Generating ideas and functionalities to solve problems.</li>
        <li>Developing the backend API using Laravel.</li>
        <li>Implementing NFC features.</li>
        <li>Deploying the application to AWS.</li>
      </ul>
    </div>
  );
};

export default MeiMei;
