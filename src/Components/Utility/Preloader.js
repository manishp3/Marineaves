// Preloader.js

import React, { useState, useEffect } from 'react';
import '../../index.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <div className="loader"></div>
      </div>
    )
  );
};

export default Preloader;
