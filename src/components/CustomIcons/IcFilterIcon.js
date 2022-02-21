import * as React from 'react';

function SvgFilterOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 18.5}
      height={props.size || 9.5}
      {...props}
      stroke="currentColor"
    >
      <path
        d="M.75.75h16m-13.143 4h10.286m-6.857 4h3.429"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default SvgFilterOutline;
