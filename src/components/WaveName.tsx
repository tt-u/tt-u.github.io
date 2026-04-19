import React from "react";

const WaveName: React.FC = () => {
  return (
    <svg
      width="260"
      viewBox="0 0 420 110"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="optimizeLegibility"
      aria-label="TTU"
    >
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#512723" />
          <stop offset="95%" stopColor="#82772f" />
        </linearGradient>
        <pattern
          id="wave"
          x="0"
          y="50"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-40 15 Q-30 5 -20 15 T0 15 T20 15 T40 15 T60 15 T80 15 T100 15 T120 15 V60 H-40z"
            fill="url(#gradient)"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="2.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>

      {/* Solid white text at the back */}
      <text
        textAnchor="left"
        x="0"
        y="88"
        fontSize="96"
        fill="white"
        fontWeight="bold"
        letterSpacing="-2"
      >
        TTU
      </text>

      {/* Wave effect text on top */}
      <text
        textAnchor="left"
        x="0"
        y="88"
        fontSize="96"
        fill="url(#wave)"
        fillOpacity="0.85"
        fontWeight="bold"
        letterSpacing="-2"
      >
        TTU
      </text>
    </svg>
  );
};

export default WaveName;
