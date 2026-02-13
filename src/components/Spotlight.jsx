import React from "react";

export const Spotlight = ({
  className = "",
  fill = "white",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3470 3470"
      fill="none"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1735"
          cy="1735"
          rx="1735"
          ry="1735"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0"
          width="3470"
          height="3470"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
};