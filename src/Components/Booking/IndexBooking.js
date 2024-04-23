import React, { useEffect } from 'react'
import PersonalInfo from './FormSenderReciever';
import { useNavigate } from 'react-router-dom';

function IndexBooking() {
  React.useEffect(() => {
    document.title = 'MarineWaves | Booking';
  }, []);

  return (
    <div>
        <PersonalInfo/>
    </div>
  )
}

export default IndexBooking
