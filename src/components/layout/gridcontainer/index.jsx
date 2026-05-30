import React from "react";

export default function GridContainer({ children, className = "", cols = 3, gap = 8 }) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    12: "grid-cols-1 lg:grid-cols-12",
  };

  const gapMap = {
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
    12: "gap-12",
    16: "gap-12 lg:gap-16",
  };

  const colsClass = colsMap[cols] || colsMap[3];
  const gapClass = gapMap[gap] || gapMap[8];

  return (
    <div className={`grid ${colsClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
