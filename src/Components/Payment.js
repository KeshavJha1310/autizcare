import React, { useState, useEffect } from 'react';
import qrImage from '../images/qr.jpg';
import successAnimation from '../images/success.avif';

const Payment = () => {
  const [showQR, setShowQR] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQR(false);
    }, 120000); // 2 minutes (2 * 60 * 1000 milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {showQR ? (
        <img src={qrImage} alt="QR Code" style={{ maxWidth: '80%', maxHeight: '80%', width: 'auto', height: 'auto' }} />
      ) : (
        <>
        <img src={successAnimation} alt="Success Animation" style={{ maxWidth: '80%', maxHeight: '80%', width: 'auto', height: 'auto' }} />
        <h1>Successfully Booked Appointment!</h1>
        </>
      )}
    </div>
  );
};

export default Payment;
