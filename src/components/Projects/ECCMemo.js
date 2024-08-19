// src/Projects/ECCMemo.js
import React from 'react';

const ECCMemo = () => {
  return (
    <div>
      <h2>ECC Memo</h2>
      <img
        src={require('./../../Assets/ECCMemo.png')}
        alt="ECC Memo Project"
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        ECC Memo is a note-taking Android application developed in Kotlin,
        featuring Firebase authentication and comprehensive note management
        capabilities.
      </p>
      <p>
        Users can create, edit, delete notes, and easily switch accounts, making
        it a versatile tool for organizing tasks and information.
      </p>
      <p>
        Future updates aim to enhance the user interface and provide detailed
        installation instructions to improve user experience.
      </p>

      <h3>Functional Requirements</h3>
      <ul>
        <li>
          <strong>Authentication:</strong>
          <ul>
            <li>
              <strong>Sign Up:</strong> Users can register using email/password
              or Google authentication.
            </li>
            <li>
              <strong>Login:</strong> Users can log in with their credentials or
              Google account.
            </li>
            <li>
              <strong>Check Login Status:</strong> Automatically redirect users
              based on their login status.
            </li>
          </ul>
        </li>
        <li>
          <strong>Create Notes:</strong>
          <ul>
            <li>Set priority levels for notes.</li>
            <li>Input note content and save it to Firebase Firestore.</li>
          </ul>
        </li>
        <li>
          <strong>Display Notes:</strong>
          <ul>
            <li>
              Retrieve and show notes in a list format with content and priority
              levels.
            </li>
          </ul>
        </li>
        <li>
          <strong>Edit Notes:</strong>
          <ul>
            <li>Change priority levels and edit note content.</li>
          </ul>
        </li>
        <li>
          <strong>Logout:</strong>
          <ul>
            <li>
              Implement logout functionality with a user-friendly options menu.
            </li>
          </ul>
        </li>
        <li>
          <strong>Delete Notes:</strong>
          <ul>
            <li>
              Provide the option to delete notes from Firebase and refresh the
              interface.
            </li>
          </ul>
        </li>
        <li>
          <strong>User Switching:</strong>
          <ul>
            <li>
              Allow users to log in with different accounts and view their
              respective notes.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Interface Overview</h3>
      <ul>
        <li>
          <strong>Login Screen:</strong> Users can log in or sign up using
          email/password or Google authentication.
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <img
              src="https://github.com/user-attachments/assets/d4fe19d4-2764-4a56-8922-701dd329d3e7"
              alt="Login Screen"
              width="150"
              style={{ margin: '5px' }}
            />
            <img
              src="https://github.com/user-attachments/assets/bd5fd222-51fb-46d9-8fd1-c1a70c7fe4f7"
              alt="Login Screen"
              width="150"
              style={{ margin: '5px' }}
            />
          </div>
        </li>
        <li>
          <strong>Notes Dashboard:</strong> Displays a list of notes with
          options to create, edit, or delete.
          <br />
          <img
            src="https://github.com/user-attachments/assets/62472669-faf8-4cc8-ad02-9e83061b721a"
            alt="Notes Dashboard"
            width="150"
            style={{ margin: '5px' }}
          />
        </li>
        <li>
          <strong>Note Editor:</strong> Allows users to input and modify note
          content and set priority levels.
          <br />
          <img
            src="https://github.com/user-attachments/assets/5eedd2f7-6b10-416c-9c07-12cba8b30355"
            alt="Note Editor"
            width="150"
            style={{ margin: '5px' }}
          />
        </li>
        <li>
          <strong>User Settings:</strong> Options for logging out and switching
          accounts.
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <img
              src="https://github.com/user-attachments/assets/bdf71a4c-d6a2-4f91-9dbc-1867e694b68d"
              alt="User Settings"
              width="150"
              style={{ margin: '5px' }}
            />
            <img
              src="https://github.com/user-attachments/assets/288fb067-cbf5-4082-b088-b0e95a904e64"
              alt="User Settings"
              width="150"
              style={{ margin: '5px' }}
            />
          </div>
        </li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>Kotlin</li>
        <li>Firebase (Authentication and Firestore)</li>
        <li>Android SDK</li>
      </ul>

      <h3>Personal Project</h3>
      <p>
        This project was developed as part of my Android Mobile App programming
        course using Kotlin. I undertook the following tasks:
      </p>
      <ul>
        <li>Identified user needs and developed the application concept.</li>
        <li>Designed the user interface and user experience.</li>
        <li>Implemented authentication and note management features.</li>
        <li>Tested the application for functionality and performance.</li>
        <li>Prepared for future updates and improvements.</li>
      </ul>
    </div>
  );
};

export default ECCMemo;
