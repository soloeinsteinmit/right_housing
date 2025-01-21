import React from "react";

const BackgroundPattern = ({ className = "" }) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.25 }}
    >
      {/* Main flowing curves with increased width */}
      <path
        d="M-100 300 C 50 200, 150 450, 300 300 S 450 150, 600 300"
        fill="none"
        stroke="white"
        strokeWidth="4"
        className="animate-pulse"
      />
      <path
        d="M-100 400 C 50 300, 150 550, 300 400 S 450 250, 600 400"
        fill="none"
        stroke="white"
        strokeWidth="4"
        className="animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Large decorative circles */}
      {[...Array(4)].map((_, i) => (
        <circle
          key={`large-circle-${i}`}
          cx={100 + i * 100}
          cy={200 + Math.sin(i) * 50}
          r="30"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}

      {/* Pulsing dots */}
      {[...Array(6)].map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx={75 + i * 60}
          cy={150 + Math.cos(i) * 40}
          r="6"
          fill="white"
          className="animate-ping"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}

      {/* Larger geometric shapes */}
      <path
        d="M180 40 L220 80 L140 80 Z"
        fill="white"
        className="animate-pulse"
        style={{ opacity: 0.6 }}
      />
      <path
        d="M280 60 L320 100 L240 100 Z"
        fill="white"
        className="animate-pulse"
        style={{ opacity: 0.6, animationDelay: "0.3s" }}
      />

      {/* Diagonal line pattern */}
      {[...Array(8)].map((_, i) => (
        <line
          key={`line-${i}`}
          x1={50 + i * 50}
          y1={450 + i * 20}
          x2={100 + i * 50}
          y2={500 + i * 20}
          stroke="white"
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      {/* Additional decorative elements */}
      <path
        d="M50 250 A 30 30 0 0 1 110 250"
        fill="none"
        stroke="white"
        strokeWidth="3"
        className="animate-pulse"
      />
      <path
        d="M250 350 A 30 30 0 0 1 310 350"
        fill="none"
        stroke="white"
        strokeWidth="3"
        className="animate-pulse"
        style={{ animationDelay: "0.4s" }}
      />

      {/* Dotted connection lines */}
      {[...Array(5)].map((_, i) => (
        <React.Fragment key={`dotted-line-${i}`}>
          <circle
            cx={200 + i * 40}
            cy={300}
            r="4"
            fill="white"
            className="animate-ping"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
          <line
            x1={200 + i * 40}
            y1={300}
            x2={240 + i * 40}
            y2={300}
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </React.Fragment>
      ))}
    </svg>
  );
};

export default BackgroundPattern;
