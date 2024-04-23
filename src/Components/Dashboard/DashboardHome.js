import React from 'react';
import "../../index.css"
function DashboardHome() {
  React.useEffect(() => {
    document.title = "MarineWaves | Dashboard";
  }, []);
  const containerStyle = {
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textAnimationStyle = {
    fontSize: '40px',
    color: '#333',
    // animation: 'bounce 1s infinite',
  };

  return (
    <div style={containerStyle}>
      <div className="row">
        <div className="col-md-12">
            <h2 className="wave-text" style={textAnimationStyle}>Welcome to MarineWave Pvt. Ltd.</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
