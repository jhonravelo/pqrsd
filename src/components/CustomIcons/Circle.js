import * as React from 'react';

function SvgCircle(props) {
  return (
    <svg
      id="ic_circle_svg"
      width={props.size || 10}
      height={props.size || 10}
      viewBox="0 0 10 10"
      fill="#f7d974"
      {...props}
    >
      <circle data-name="Ellipse 198" cx={5} cy={5} r={5} />
    </svg>
  );
}

export default SvgCircle;
