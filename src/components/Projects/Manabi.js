// src/Projects/Manabi.js
import React from 'react';

const Manabi = () => {
  return (
    <div>
      <h2>Manabi</h2>
      <img
        src={require('./../../Assets/manabi2.png')}
        alt="Manabi Project"
        style={{
          width: '48%',
          minWidth: '500px',
          maxWidth: '600px',
          height: 'auto',
          flex: '1 1 300px',
        }}
      />
      <p>
        Manabi is a web app designed for vocabulary learning using flashcards,
        combined with pronunciation audio and AI-powered categorization. It
        helps users enhance their language skills by listening to correct
        pronunciations and organizing words efficiently through intelligent
        classification.
      </p>

      <h3>Current Development Status</h3>
      <p>
        The project is currently under active development, with core flashcard
        functionality being implemented.
      </p>

      <h3>Upcoming Features</h3>
      <p>The following features are planned for future development:</p>
      <ul>
        <li>
          <strong>Data Import:</strong> Integration with popular platforms like
          Quizlet and Anki to allow users to import their existing vocabulary
          sets for seamless migration.
        </li>
        <li>
          <strong>AI-Powered Definitions:</strong> When users input new terms,
          the system will automatically suggest definitions using AI,
          streamlining the card creation process.
        </li>
        <li>
          <strong>Smart Categorization:</strong> AI-based classification system
          that automatically organizes vocabulary cards into relevant categories
          based on content and context.
        </li>
        <li>
          <strong>Hands-Free Learning Mode:</strong> Automatic audio playback
          feature that enables users to learn vocabulary during commutes or
          other activities, supporting shadowing technique for language
          learning.
        </li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>Flashcard System:</strong> Interactive flashcards for
          effective vocabulary memorization
        </li>
        <li>
          <strong>Pronunciation Audio:</strong> High-quality audio playback for
          correct pronunciation learning
        </li>
        <li>
          <strong>AI Integration:</strong> Smart features for definition
          suggestions and automatic categorization
        </li>
        <li>
          <strong>Progressive Learning:</strong> Spaced repetition algorithm for
          optimal retention
        </li>
      </ul>

      <h3>Personal Project Contributions</h3>
      <p>In this project, I undertook the following tasks:</p>
      <ul>
        <li>
          Identified the problem and developed innovative solutions for
          vocabulary learning
        </li>
        <li>
          Created comprehensive project planning and system architecture design
        </li>
        <li>Developed the web application using React JS</li>
        <li>
          Implement AI features for smart categorization and definition
          suggestions
        </li>
        <li>Test the application for usability and performance</li>
        <li>Prepare for future updates and feature enhancements</li>
      </ul>
    </div>
  );
};

export default Manabi;
