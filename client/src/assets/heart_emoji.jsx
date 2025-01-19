import React from "react";

const HeartEmoji = ({ size = 80, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      {/* Heart shape */}
      <path
        d="M50 80 L90 40 Q100 20 80 20 Q60 20 50 40 Q40 20 20 20 Q0 20 10 40 Z"
        fill="#C4841D"
        stroke="#F9C97C"
        strokeWidth="2"
      />
      {/* Inner details */}
      <path
        d="M50 75 L85 40 Q93 25 80 25 Q65 25 50 45 Q35 25 20 25 Q7 25 15 40 Z"
        fill="#F5A524"
      />
      {/* Shine effect */}
      <path
        d="M30 30 Q40 25 50 35"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HeartEmoji;
