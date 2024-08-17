// src/Projects/MemoryGame.js
import React from 'react';

const MemoryGame = () => {
  return (
    <div>
      <h2>Memory Game</h2>
      <img
        src={require('./../../Assets/MemoryGame.png')}
        alt="Memory Game Project"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        The Memory Game is an engaging matching game designed for all ages,
        helping players improve their memory by finding pairs of fruit and
        vegetable images.
      </p>
      <p>
        Players can choose from three difficulty levels: Easy, Medium, and Hard,
        catering to a wide range of players.
      </p>
      <p>
        The game includes a main screen for difficulty selection, a gameplay
        screen for matching pairs, and a results screen to show the player's
        performance.
      </p>

      <h3>Main Features</h3>
      <ul>
        <li>
          <strong>Choose Difficulty Level:</strong> Players can select from
          three difficulty levels:
          <ul>
            <li>
              <strong>Easy:</strong> With fewer pairs of images, suitable for
              beginners.
            </li>
            <li>
              <strong>Medium:</strong> Increased difficulty with more pairs of
              images.
            </li>
            <li>
              <strong>Hard:</strong> For those looking to challenge themselves
              with the most pairs of images.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Interface Overview</h3>
      <h4>Main Screen</h4>
      <img
        src="https://github.com/user-attachments/assets/8c7b40fc-6118-46d0-9c9f-df776f218807"
        width="150"
        style={{ margin: '5px' }}
        alt="Main Screen"
      />

      <h4>Gameplay Screen</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <img
          src="https://github.com/user-attachments/assets/bf2727b4-4f30-46e2-a02e-fa9211edabc9"
          width="150"
          style={{ margin: '5px' }}
          alt="Gameplay 1"
        />
        <img
          src="https://github.com/user-attachments/assets/56dfbb0a-7f28-4e1a-b530-61cd13a1ee40"
          width="150"
          style={{ margin: '5px' }}
          alt="Gameplay 2"
        />
        <img
          src="https://github.com/user-attachments/assets/d04f56df-4332-4513-85ee-a6e48f80766c"
          width="150"
          style={{ margin: '5px' }}
          alt="Gameplay 3"
        />
      </div>

      <h4>Results Screen</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <img
          src="https://github.com/user-attachments/assets/3bfcbf04-8a56-43bf-a9b2-e1ce16074021"
          width="150"
          style={{ margin: '5px' }}
          alt="Results 1"
        />
        <img
          src="https://github.com/user-attachments/assets/e9386966-37d4-4c86-b8c5-a712a3b094ab"
          width="150"
          style={{ margin: '5px' }}
          alt="Results 2"
        />
      </div>

      <h3>How to Play</h3>
      <ol>
        <li>Choose the difficulty level you want to play.</li>
        <li>Tap on the images to reveal them and find matching pairs.</li>
        <li>Continue until all pairs are found.</li>
        <li>
          Check your time and number of attempts to improve your skills in
          future plays.
        </li>
      </ol>

      <h3>Technologies Used</h3>
      <ul>
        <li>Java</li>
        <li>Android SDK</li>
      </ul>

      <h3>Personal Project</h3>
      <p>
        This project was developed as a personal endeavor to enhance my skills
        in java and application development. I undertook the following tasks:
      </p>
      <ul>
        <li>Designed the game concept and flow.</li>
        <li>Developed the user interface and gameplay mechanics.</li>
        <li>Implemented difficulty levels and scoring system.</li>
        <li>Tested the game for usability and performance.</li>
        <li>Prepared for future updates and feature enhancements.</li>
      </ul>
    </div>
  );
};

export default MemoryGame;
