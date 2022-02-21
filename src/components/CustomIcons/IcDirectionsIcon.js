import * as React from 'react';

function SvgIcDirections(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 16}
      height={props.size || 16}
      {...props}
    >
      <path d="M0 0h16v16H0z" fill="none" />
      <path d="M14.473 7.526l-6-6a.664.664 0 00-.94 0l-6 6a.664.664 0 000 .94l6 6a.664.664 0 00.94 0l6-6a.664.664 0 000-.94zm-5.142 2.14V8H6.667v1.334a.668.668 0 11-1.336 0v-2a.669.669 0 01.667-.667h3.333V5l2.1 2.1a.33.33 0 010 .473z" />
    </svg>
  );
}

export default SvgIcDirections;
