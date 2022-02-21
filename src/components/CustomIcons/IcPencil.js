import * as React from 'react';

function SvgIcPensil(props) {
  return (
    <svg
      id="icon__trash_1"
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M0 12.666V16h3.333l9.822-9.822-3.333-3.333zM15.733 3.6a.859.859 0 000-1.244L13.644.267a.859.859 0 00-1.244 0l-1.644 1.645 3.333 3.333z"
        fill="#104eb2"
      />
    </svg>
  );
}

export default SvgIcPensil;
