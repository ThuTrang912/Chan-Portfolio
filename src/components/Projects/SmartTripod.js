// src/Projects/SmartTripod.js
import React from 'react';

const SmartTripod = () => {
  return (
    <div>
      <h2>SmartTripod</h2>
      <img
        src={require('./../../Assets/SmartTripod.png')}
        alt="SmartTripod Project"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        The SmartTripod is an AI-based automatic tracking camera system that
        significantly reduces the burden of manual operation in capturing sports
        events.
      </p>
      <p>
        Users can set up the tripod and let the system automatically track the
        subject, ensuring that critical moments are captured without missing any
        action.
      </p>
      <p>
        Benefits include ease of use, enhanced video quality, and the ability to
        focus on the event rather than the equipment, making it ideal for sports
        enthusiasts and professionals.
      </p>

      <h3>Interface Overview and Usage Description</h3>
      <ul>
        <li>
          <strong>Object Recognition:</strong> The system recognizes the target
          object by providing several prepared full-size images.
        </li>
        <li>
          <strong>Automatic Tracking:</strong> Start the camera's automatic
          tracking feature to capture the target object.
          <ul>
            <li>Begin recording once the target object is captured.</li>
            <li>Stop recording if the target object is lost.</li>
            <li>
              <strong>Optional:</strong> If equipped with a gimbal, the motors
              will be controlled to track the target object smoothly.
            </li>
          </ul>
        </li>
      </ul>

      <h4>App Interface</h4>
      <img
        src="https://github.com/user-attachments/assets/7e1d381c-5d22-425c-8d0f-a1a3c5f0aefe"
        style={{ width: '100%', height: 'auto' }}
        alt="SmartTripod UI"
      />
      {/* <h4>User Interface</h4>
      <img
        src="https://github.com/user-attachments/assets/your-smarttripod-user-interface-image"
        style={{ width: '100%', height: 'auto' }}
        alt="User Side"
      />
      <h4>Admin Interface</h4>
      <img
        src="https://github.com/user-attachments/assets/your-smarttripod-admin-interface-image"
        style={{ width: '100%', height: 'auto' }}
        alt="Admin Side"
      /> */}

      <h3>Technologies Used</h3>
      <ul>
        <li>YOLOv5 (Python)</li>
        <li>Flutter (Dart)</li>
        <li>ESP32 and various modules</li>
        <li>3D Printing</li>
      </ul>

      <h3>System configuration diagram</h3>
      <img
        src="https://github.com/user-attachments/assets/0a048775-385c-4556-8208-456c05455817"
        style={{ width: '100%', height: 'auto' }}
        alt="System configuration"
      />

      <h3>Personal Project</h3>
      <p>In this project, I undertook the following tasks:</p>
      <ul>
        <li>Identified the problem and developed ideas for the solution.</li>
        <li>Created a project plan and designed the system architecture.</li>
        <li>Developed the AI server to support functionality.</li>
        <li>Created the application for user interaction.</li>
        <li>Integrated the hardware components for the system.</li>
      </ul>
    </div>
  );
};

export default SmartTripod;
