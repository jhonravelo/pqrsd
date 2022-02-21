import * as React from 'react';

function SvgIcCalculator(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 23.654}
      height={props.size || 33.5}
      viewBox="0 0 23.654 33.5"
      xmlSpace="preserve"
      {...props}
    >
      <defs>
        <style>
          {
            '.ic-calculator_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.ic-calculator_svg__b{fill:currentColor}'
          }
        </style>
      </defs>
      <g transform="translate(-111.25 -47.25)">
        <rect
          className="ic-calculator_svg__a"
          width={22.154}
          height={32}
          rx={2}
          transform="translate(112 48)"
        />
        <path
          className="ic-calculator_svg__a"
          d="M115.693 52.923h14.768v4.923h-14.768z"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(114.462 61.538)"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(121.231 61.538)"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(128 61.538)"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(114.462 67.692)"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(121.231 67.692)"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(114.462 73.846)"
        />
        <circle
          className="ic-calculator_svg__b"
          cx={1.846}
          cy={1.846}
          r={1.846}
          transform="translate(121.231 73.846)"
        />
        <rect
          className="ic-calculator_svg__b"
          width={3.692}
          height={9.846}
          rx={1.846}
          transform="translate(128 67.692)"
        />
      </g>
    </svg>
  );
}

export default SvgIcCalculator;
