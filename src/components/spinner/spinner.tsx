import React from 'react';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50, color = '#000000' }) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderTop: `4px solid ${color}`,
    borderRight: '4px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        ...spinnerStyle,
      }}
    ></div>
  );
};

export default Spinner;
