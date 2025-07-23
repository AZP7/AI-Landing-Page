import React from 'react';

function VideoBar({
  color = '#10B981',
  width = 200,
  height = 20,
  fillRatio = 0.5, // 0.0 to 1.0
  backgroundColor = '#fff', // Tailwind gray-200
  className,
}) {
  const filledWidth = width * fillRatio;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background bar */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill={backgroundColor}
        rx="4"
        ry="4"
      />
      {/* Filled portion */}
      <rect
        x="0"
        y="0"
        width={filledWidth}
        height={height}
        fill={color}
        rx="4"
        ry="4"
      />
    </svg>
  );
}

export default VideoBar;
