import React from "react";
import {
  staticRegionDataIncity,
  incityCategoryMap,
  industrialCategoryMap,
  staticRegionDataIndustrial,
} from "@/src/utils/mapStaticData";

export const LocationDot = ({
  x = 100,
  y = 100,
  label = "Unknown",
  incityname = "Unknown",
  xOffset = 5,
  onClick,
  onMouseEnter,
  onMouseLeave,
  circleRadius = 1,
  fontSize = 1.8,
  text_position = "", // "left" or "right"
  incity_text_position_ = "", // "left" or "right"
  regionKey = null,
  zoom: zoomProp = null,
  parent = "",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Determine zoom: use prop first, otherwise fetch from staticRegionDataIndustrial
  const zoom =
    zoomProp ||
    (regionKey ? staticRegionDataIndustrial[regionKey]?.zoom : { scale: 1 });

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  };

  const minOffset = 2; // minimum px distance from circle
  const scaledXOffset = Math.max(
    xOffset / Math.sqrt(zoom?.scale || 1),
    minOffset
  );

  // === label position (for industrial/static regions) ===
  const textX =
    text_position === "left" ? x - scaledXOffset : x + scaledXOffset;
  const textAnchor = text_position === "left" ? "end" : "start";

  // === incity label position (for incity map) ===
  const incityTextX =
    incity_text_position_ === "left" ? x - scaledXOffset : x + scaledXOffset;
  const incityTextAnchor = incity_text_position_ === "left" ? "end" : "start";

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={isHovered ? circleRadius * 1.4 : circleRadius}
        fill="#0db14b"
        stroke="#fff"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className="transition-all duration-300 ease-in-out cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      />

      {parent === "Incity" ? (
        <text
          x={incityTextX}
          y={y + 0.3}
          className="cursor-pointer"
          fill="#fff"
          fontSize={fontSize}
          fontWeight="500"
          textAnchor={incityTextAnchor}
          dominantBaseline="middle"
          filter="url(#text-shadow)"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          {incityname}
        </text>
      ) : (
        <text
          x={textX}
          y={y + 0.3}
          className="cursor-pointer"
          fill="#fff"
          fontSize={fontSize}
          fontWeight="500"
          textAnchor={textAnchor}
          dominantBaseline="middle"
          filter="url(#text-shadow)"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onClick}
        >
          {label}
        </text>
      )}
    </g>
  );
};
