import React from "react";

const PlaceholderImage = ({ className = "", color = "success" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="placeholder-pattern"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2"
              stroke={`var(--${color}-100)`}
              strokeWidth="1"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`var(--${color}-50)`} />
        <rect width="100" height="100" fill="url(#placeholder-pattern)" />
      </svg>
    </div>
  );
};

export default PlaceholderImage;
