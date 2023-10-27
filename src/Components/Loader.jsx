import React from "react";
import loader from '../loader.svg';

const Loader = () => {
  return (
    <div
      style={{
        width: '100%', 
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed', 
        top: '0',
        left: '0',
        background: 'rgba(255, 255, 255, 0.7)', 
        zIndex: 9999, 
      }}
    >
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
