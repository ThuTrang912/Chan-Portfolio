import React from 'react';

const HydroCare = () => {
  return (
    <div>
      <h2>HydroCare – Water Intake Management App</h2>
      <div style={{ position: 'relative' }}>
        {/* Thay thế bằng hình ảnh minh họa nếu có */}
        <img src={require('./../../Assets/hydrocare.png')} alt="HydroCare App" style={{ width: '100%', height: 'auto' }} />
      </div>

      <h3>Project Overview</h3>
      <p>
        HydroCare is an application designed to help users manage their daily water intake efficiently. The app provides reminders, tracks daily consumption, and offers insights to ensure users maintain a healthy hydration balance.
      </p>

      <h3>Problem Statement</h3>
      <p>
        Proper water management is essential for maintaining good health. Insufficient water intake can lead to dehydration, fatigue, and decreased concentration. On the other hand, excessive water intake may cause electrolyte imbalance and swelling.
      </p>

      <h3>Why Water Management?</h3>
      <p>
        Maintaining proper hydration is crucial for health management. Lack of water can cause dehydration, fatigue, and poor concentration, while overhydration can lead to imbalances and swelling. HydroCare helps users avoid these issues by supporting healthy water intake habits.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Personalized Reminders:</strong> Notifies users to drink water at optimal intervals.</li>
        <li><strong>Daily Tracking:</strong> Allows users to log their water intake and monitor progress.</li>
        <li><strong>Health Insights:</strong> Provides feedback and tips based on user’s hydration habits.</li>
        <li><strong>User-friendly Interface:</strong> Simple and intuitive design for all age groups.</li>
      </ul>

      <h3>How to Use</h3>
      <ol>
        <li><strong>Turn on Bluetooth</strong> on your phone and open the HydroCare app.</li>
        <li><strong>Connect Bluetooth:</strong> Select your smart water bottle device from the list to connect.</li>
        <li><strong>Register Water Bottle:</strong>
          <ul>
            <li>If you receive a data error or your bottle is empty, tap the 「ボトル登録」 button.</li>
            <li>Enter the new bottle capacity (for example, 400ml) to start tracking your water intake.</li>
          </ul>
        </li>
        <li><strong>Track Water Intake:</strong> The app will automatically update the amount of water you have consumed and the remaining amount in your bottle.</li>
        <li><strong>Set Daily Water Goal:</strong> Set your daily water intake goal and monitor your progress directly in the app.</li>
        <li><strong>Add a New Bottle:</strong> When your current bottle is empty, register a new one by repeating the bottle registration process.</li>
      </ol>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          margin: '32px 0',
          flexWrap: 'wrap'
        }}
      >
        <img
          src={require('./../../Assets/hydrocare-use.png')}
          alt="HydroCare Use Step 1"
          style={{
            width: '48%',
            minWidth: '200px',
            maxWidth: '600px',
            height: 'auto',
            flex: '1 1 300px'
          }}
        />
        <img
          src={require('./../../Assets/hydrocare-use-2.png')}
          alt="HydroCare Use Step 2"
          style={{
            width: '48%',
            minWidth: '200px',
            maxWidth: '600px',
            height: 'auto',
            flex: '1 1 300px',
            marginTop: '-32px' // Nhích hình lên trên
          }}
        />
      </div>

      
      <h3>Demonstration</h3>
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '20px auto', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        {/* Thay thế bằng video demo nếu có */}
        <video
          controls
          style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
          poster={require('./../../Assets/hydrocare.png')}
        >
          <source src={require('./../../Assets/hydrocare-demo.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
      </div>
      <h3>System Architecture</h3>
      <img
        src={require('./../../Assets/hydrocare-system-architecture.png')}
        style={{ width: '100%', height: 'auto' }}
        alt="HydroCare System Architecture"
      />
      <h5>3D-Printed Enclosure</h5>
      <img
        src={require('./../../Assets/hydrocare-3Ddesign.png')}
        style={{
          width: '40%',
          height: 'auto',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        alt="HydroCare 3D Design"
      />
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>ESP32:</strong> Main microcontroller for device control and communication.</li>
        <li><strong>HX711 Module & Load Cell:</strong> For precise weight measurement of water intake.</li>
        <li><strong>ST7735 TFT Display:</strong> Visual feedback for device status and measurements.</li>
        <li><strong>Bluetooth:</strong> Wireless communication between the device and the mobile application.</li>
        <li><strong>Mobile Application (React Native):</strong> For user interface, data tracking, and device management.</li>
        <li><strong>Charger Module & Li-ion Battery:</strong> Power management and portability.</li>
        <li><strong>3D Printing:</strong> Custom-designed and manufactured enclosure for the device, ensuring optimal fit, durability, and aesthetics.</li>
      </ul>

      <h3>Team Product</h3>
      <p>As a team member, I was responsible for:</p>
      <ul>
        <li>Designed and manufactured the custom 3D-printed enclosure for the smart water bottle device.</li>
        <li>Developed and assembled the hardware system, including ESP32 integration, sensor wiring, and power management.</li>
        <li>Collaborated with the software team to ensure seamless communication between the hardware and the mobile application.</li>
        <li>Conducted hardware testing and troubleshooting to ensure device reliability and user safety.</li>
      </ul>
      
    </div>
  
  );
};

export default HydroCare; 