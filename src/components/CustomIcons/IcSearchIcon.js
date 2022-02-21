import * as React from 'react';

function SvgIcSearchOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 17.207}
      height={props.size || 17.207}
      {...props}
    >
      <g fill="none" strokeMiterlimit={10}>
        <path d="M7.045.5a6.545 6.545 0 106.545 6.545A6.545 6.545 0 007.045.5z" />
        <path d="M11.929 11.929L16.5 16.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default SvgIcSearchOutline;
