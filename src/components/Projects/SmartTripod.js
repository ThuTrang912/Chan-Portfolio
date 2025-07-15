// src/Projects/SmartTripod.js
import React from 'react';

const SmartTripod = () => {
  return (
    <div>
      <h2>SuMa (SmartTripod)</h2>
      <div style={{ position: 'relative' }}>
      <img
        src={require('./../../Assets/smartTripod2.png')}
        alt="SuMa SmartTripod Project"
        style={{ width: '100%', height: 'auto' }}
      />
      </div>
      
      <h3>Project Overview</h3>
      <p>
        SuMa is an AI-based automatic video recording and tracking system designed to meet selfie needs, 
        especially during solo travel and outdoor activities. The system can automatically record videos 
        and track subjects, allowing users to easily capture memorable moments without manual camera operation.
      </p>

      
      <h3>Purpose and Background</h3>
      <p>
        SuMa was developed to address the growing need for automated photography and videography, 
        particularly for solo travelers and outdoor enthusiasts. The system eliminates the need for 
        manual camera operation, allowing users to focus on their activities while ensuring high-quality 
        content capture.
      </p>

      <h3>System Requirements & Features</h3>
      <ul>
        <li>
          <strong>Object Recognition Technology:</strong> Uses advanced AI to identify and track people, 
          vehicles, animals, and various objects in real-time.
        </li>
        <li>
          <strong>Automatic Camera Tracking:</strong> Eliminates the need for manual camera operation, 
          automatically following target movements to improve shooting efficiency and capture quality.
        </li>
        <li>
          <strong>Capacity Optimization:</strong> Intelligent recording system that starts and stops 
          automatically to save storage space.
        </li>
      </ul>

      <h3>How to Use</h3>
      <p>
        SuMa uses recognition technology to identify and track objects. There are two main use cases:
      </p>
      <ol>
        <li>
          <strong>Fixed Tripod Mode:</strong> Automatically recognizes objects and starts/ends recording 
          to save capacity. Perfect for stationary setups.
        </li>
        <li>
          <strong>Rotating Tripod Mode:</strong> Uses Bluetooth-controlled motors for subject tracking. 
          The tripod rotates according to object movement, keeping the target within the frame and 
          stabilizing the video for professional-quality results.
        </li>
      </ol>
      <img
        src={require('./../../Assets/smarttripod-mode-change.png')}
        style={{
          width: '50%',
          height: 'auto',
          display: 'block',         // Thêm dòng này để căn giữa
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        alt="System configuration"
      />
      <h3>Demo Video</h3>
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        maxWidth: '800px', 
        margin: '20px auto',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <video
          controls
          style={{ width: '100%', height: 'auto' }}
          poster={require('./../../Assets/smartTripod2.png')}
        >
          <source src={require('./../../Assets/demonstration.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h3>System Architecture</h3>
      <img
        src={require('./../../Assets/smarttripod-system-configuration-diagram.png')}
        style={{ width: '100%', height: 'auto' }}
        alt="System configuration"
      />
      <p>The system consists of three main components:</p>
      <ul>
        <li>
          <strong>Application Side:</strong> Developed using Flutter for cross-platform mobile compatibility
        </li>
        <li>
          <strong>Server Side:</strong> Powered by UltraLytics YOLOv11 machine learning model for 
          real-time object detection and tracking
        </li>
        <li>
          <strong>Gimbal Side:</strong> Controlled by ESP32 board and servo motors for precise 
          camera movement and stabilization
        </li>
      </ul>

      <h3>Technical Challenges & Solutions</h3>
      <h4>Problem 1: Slow Camera Tracking</h4>
      <ul>
        <li>
          <strong>Cause:</strong> Real-time internet communication can become busy, affecting 
          object capture performance
        </li>
        <li>
          <strong>Solution:</strong> Direct AI integration into the app enables offline operation, 
          significantly improving tracking accuracy
        </li>
      </ul>

      <h4>Problem 2: Object Recognition Failures</h4>
      <ul>
        <li>
          <strong>Cause:</strong> Limited AI capability and insufficient training data
        </li>
        <li>
          <strong>Solution:</strong> Enhanced AI model training data and algorithm improvements 
          to boost recognition accuracy
        </li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>YOLOv11 (UltraLytics) - Object Detection</li>
        <li>Flutter (Dart) - Mobile Application</li>
        <li>ESP32 - Hardware Control</li>
        <li>Bluetooth Communication</li>
        <li>3D Printing - Custom Components</li>
      </ul>

      <h3>Personal Project Contributions</h3>
      <p>In this project, I undertook the following tasks:</p>
      <ul>
        <li>Identified the problem and developed innovative solutions for automated photography</li>
        <li>Created comprehensive project planning and system architecture design</li>
        <li>Developed the AI server using YOLOv11 for real-time object detection</li>
        <li>Built the Flutter application for seamless user interaction</li>
        <li>Integrated ESP32 hardware components for precise gimbal control</li>
        <li>Implemented Bluetooth communication for wireless motor control</li>
      </ul>
    </div>
  );
};

export default SmartTripod;
