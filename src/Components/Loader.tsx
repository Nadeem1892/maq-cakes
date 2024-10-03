import React from 'react';

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const spanStyle = (delay: string) => ({
    opacity: 0,
    animation: `fadeInOut 2s ease-in-out infinite`,
    animationDelay: delay,
    color: 'black',
    letterSpacing: '0.5em',
    textShadow: '2px 2px 3px #919191',
  });

  const keyframes = `
    @keyframes fadeInOut {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframes}</style>
      <div className="loader" style={{ display: 'flex', gap: '0.1em' }}>
        <span style={spanStyle('0.2s')}>L</span>
        <span style={spanStyle('0.4s')}>o</span>
        <span style={spanStyle('0.6s')}>a</span>
        <span style={spanStyle('0.8s')}>d</span>
        <span style={spanStyle('1s')}>i</span>
        <span style={spanStyle('1.2s')}>n</span>
        <span style={spanStyle('1.4s')}>g</span>
        <span style={spanStyle('1.6s')}>.</span>
        <span style={spanStyle('2s')}>.</span>
      </div>
    </div>
  );
};

export default Loader;
