import React from "react";

const SmileEmoji = ({ size = 80, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
    >
      {/* Face circle */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="#FFE55C"
        stroke="#333"
        strokeWidth="2"
      />
      {/* Eyes */}
      <circle cx="35" cy="40" r="5" fill="#333" />
      <circle cx="65" cy="40" r="5" fill="#333" />
      {/* Smile */}
      <path
        d="M30 55 Q50 75 70 55"
        fill="none"
        stroke="#333"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Dimples */}
      <circle cx="28" cy="55" r="2" fill="#FF9955" />
      <circle cx="72" cy="55" r="2" fill="#FF9955" />
    </svg>
  );
};

export default SmileEmoji;
