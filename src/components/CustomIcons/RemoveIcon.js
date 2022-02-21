import * as React from 'react';

function SvgIcRemove(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 17}
      height={props.size || 2}
      {...props}
    >
      <path
        d="M16 1H1"
        fill="none"
        stroke="#fd635b"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgIcRemove;
