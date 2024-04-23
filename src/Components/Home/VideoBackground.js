import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../../index.css';
import video from '../../Img/hero.mp4';

const VideoBackground = () => {
  const [textIndex, setTextIndex] = useState(0);
  const el = useRef(null);

  const texts = [
    '"Digital Logistics Delivered"',
    '"Ride the wave of efficiency with MarineWaves."',
    '"Where every cargo finds its perfect wave."'
  ];

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [texts[textIndex]],
      typeSpeed: 60,
      onComplete: (self) => {
        setTimeout(() => { // Introduce a delay before switching to the next sentence
          self.reset(); // Reset Typed instance to clear current text
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Switch to the next sentence
        }, 2000); // Adjust the delay duration (in milliseconds) as needed
      },
    });

    return () => {
      typed.destroy();
    };
  }, [textIndex]);

  return (
    <div className="video-background container-fluid">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="gradient-overlay"></div>
      <div className="row">
        <div className="video-overlay col-md-12 ">
          <h1 ref={el} className="d-inline-block"></h1>
          <p className="display-6" style={{ fontSize: '20px', marginTop: '1.2rem', color: '#c5c5c5' }}>
            An end-to-end digital freight forwarder platform that makes shipping easier than before
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
