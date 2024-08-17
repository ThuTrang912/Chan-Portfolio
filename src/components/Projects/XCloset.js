// src/Projects/XCloset.js
import React from 'react';

const XCloset = () => {
  return (
    <div>
      <h2>XCloset</h2>
      <img
        src={require('./../../Assets/XCloset.png')}
        alt="XCloset Project"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        The closet management application effectively addresses the tracking and
        usage of clothing.
      </p>
      <p>
        Users can easily add, edit, and delete clothing information through a
        mobile app developed with Flutter.
      </p>
      <p>
        An API built with Laravel facilitates quick data management. The
        integration of RFID allows for monitoring the usage status of clothing,
        helping users know which items have been worn.
      </p>

      <h3>Interface Overview and Usage Description</h3>
      <p>The application interface includes key functionalities such as:</p>
      <ul>
        <strong>Register RFID Tags:</strong>
        <ul>
          <li>Scan RFID tags with the reader after purchase.</li>
          <li>Display tag ID if unregistered.</li>
          <li>
            Register tag ID, item name, drawer name, and photo for easy
            management.
          </li>

          <li>
            <strong>Edit Clothing:</strong> Users can update details of existing
            clothing items.
          </li>
          <li>
            <strong>Delete Clothing:</strong> Users can remove clothing items
            they no longer own.
          </li>
        </ul>

        <li>
          <strong>Put Clothing in Closet:</strong>
          <ul>
            <li>Scan the RFID tag of the clothing item.</li>
            <li>M5Stack displays the drawer location.</li>
            <li>Checkmark appears in the app indicating storage.</li>
          </ul>
        </li>
        <li>
          <strong>Take Clothing Out of Closet:</strong>
          <ul>
            <li>Check the app for clothing presence and drawer location.</li>
            <li>Scan the RFID tag of the clothing item.</li>
            <li>Checkmark disappears in the app, indicating removal.</li>
          </ul>
        </li>
      </ul>

      <h4>App Interface</h4>
      <img
        src="https://github.com/ThuTrang912/XCloset/assets/129019073/d23640ef-839f-4ba2-8ecc-f27bce76fb77"
        style={{ width: '100%', height: 'auto' }}
        alt="XCloset UI"
      />

      <h3>Technologies Used</h3>
      <ul>
        <li>Figma</li>
        <li>Flutter (Dart)</li>
        <li>Laravel (PHP)</li>
        <li>MySQL</li>
        <li>M5Stack Core 2 AWS + RFID Technology</li>
      </ul>

      <h3>Team Product</h3>
      <p>As the team leader, I was responsible for:</p>
      <ul>
        <li>Generating ideas and analyzing problems.</li>
        <li>Designing the system architecture.</li>
        <li>Delegating tasks to team members.</li>
        <li>Overseeing the M5 Stack and RFID card integration.</li>
        <li>Developing the backend API using Laravel.</li>
      </ul>
    </div>
  );
};

export default XCloset;
