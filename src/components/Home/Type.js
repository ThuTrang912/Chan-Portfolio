import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'IT Development Research Student at ECC College of Multimedia',
          'Aspiring Software Developer from Vietnam',
          'Seeking Opportunities in Japan',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
