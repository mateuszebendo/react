import React from 'react';

export default function Background({url}) {
  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundImage: `url(${url})`,
    width: '100%',
    height: '100vh', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    zIndex: -2
  };

  return <div style={backgroundStyle}></div>;
}
