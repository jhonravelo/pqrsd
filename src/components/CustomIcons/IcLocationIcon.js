import * as React from 'react';

function SvgIcLocation(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 23.655}
      height={props.size || 33.5}
      viewBox="0 0 23.655 33.5"
      xmlSpace="preserve"
      {...props}
    >
      <defs>
        <style>
          {
            '.ic-location_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
          }
        </style>
      </defs>
      <g transform="translate(-111.25 -47.25)">
        <path
          className="ic-location_svg__a"
          d="M123.077 48A10.822 10.822 0 00112 58.539c0 6.693 7.385 17.3 10.1 20.962a1.213 1.213 0 001.962 0c2.712-3.662 10.1-14.264 10.1-20.962A10.822 10.822 0 00123.077 48z"
        />
        <circle
          className="ic-location_svg__a"
          cx={3.692}
          cy={3.692}
          r={3.692}
          transform="translate(119.385 55.385)"
        />
      </g>
    </svg>
  );
}

export default SvgIcLocation;
