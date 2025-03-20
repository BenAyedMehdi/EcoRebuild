import React from "react";

const ProgressBar = ({ value, className, barClassName }) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`${barClassName} relative`}
        style={{
          width: `${Math.min(100, Math.max(0, value))}%`,
          transition: "width 1.5s ease-in-out",
        }}
      >
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        ></div>
      </div>
      {/* Percentage label */}
      <div
        className="absolute -right-1 top-1/2 transform translate-x-full -translate-y-1/2 ml-2 text-sm font-semibold text-gray-600"
        style={{ marginLeft: "0.5rem" }}
      >
        {Math.round(value)}%
      </div>
    </div>
  );
};

export default ProgressBar;
