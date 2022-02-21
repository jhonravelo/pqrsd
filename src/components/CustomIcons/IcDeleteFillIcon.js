import * as React from 'react';

function SvgIcDeleteFill(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 20}
      height={props.size || 20}
      {...props}
    >
      <path d="M10 0a10 10 0 1010 10A10.03 10.03 0 0010 0zm5 11H5V9h10z" />
    </svg>
  );
}

export default SvgIcDeleteFill;
