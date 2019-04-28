import * as React from 'react';

export const Numeric: React.SFC<{ value: number; width: number }> = ({
  value,
  width = 46,
}) => (
  <text fontSize="20.25" fontWeight="bold" fill="#FFFFFF">
    <tspan
      alignmentBaseline="central"
      textAnchor="middle"
      x={width / 2}
      y={width / 2}
    >
      {value}
    </tspan>
  </text>
);

export default Numeric;