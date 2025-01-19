import React from "react";

const StatsBackgroundPattern = ({ className = "" }) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.2 }}
    >
      {/* Grid pattern */}
      <pattern
        id="smallGrid"
        width="30"
        height="30"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 30 0 L 0 0 0 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-success-400"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#smallGrid)" />

      {/* Upward trending line */}
      <path
        d="M 50 500 Q 200 450, 350 300"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-success-300"
      />

      {/* Decorative dots along the line */}
      <circle cx="50" cy="500" r="4" className="fill-success-200" />
      <circle cx="200" cy="450" r="4" className="fill-success-200" />
      <circle cx="350" cy="300" r="4" className="fill-success-200" />

      {/* Abstract shapes suggesting growth */}
      <path
        d="M 280 200 L 320 160 L 360 200 Z"
        className="fill-success-200 animate-pulse"
        style={{ opacity: 0.3 }}
      />
      <path
        d="M 60 400 L 100 360 L 140 400 Z"
        className="fill-success-200 animate-pulse"
        style={{ opacity: 0.3, animationDelay: "0.5s" }}
      />

      {/* Percentage circles */}
      {[...Array(5)].map((_, i) => (
        <circle
          key={i}
          cx={50 + i * 80}
          cy={150}
          r="15"
          className="stroke-success-200 fill-none"
          strokeWidth="1"
          strokeDasharray={`${(i + 1) * 20} 100`}
        />
      ))}

      {/* Dynamic bars */}
      {[...Array(4)].map((_, i) => (
        <rect
          key={i}
          x={300 + i * 20}
          y={400 - i * 30}
          width="10"
          height={50 + i * 30}
          className="fill-success-200 animate-pulse"
          style={{
            opacity: 0.3,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </svg>
  );
};

export default StatsBackgroundPattern;
