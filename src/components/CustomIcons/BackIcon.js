import React from 'react';

const SvgIcBack = props => (
  <svg
    data-name="ic_back"
    width={props.size || 50}
    height={props.size || 50}
    viewBox={'0 0 50 50'}
    {...props}
  >
    <path
      d="M42.678 7.322A25 25 0 007.322 42.678 25 25 0 0042.678 7.322zM25 46.907A21.907 21.907 0 1146.907 25 21.932 21.932 0 0125 46.907z"
      className="ic_back_svg__cls-1"
      data-name="Path 204"
    />
    <path
      d="M27.889 11.795L14.727 25l13.162 13.205 2.191-2.183L19.094 25l10.981-11.022z"
      className="ic_back_svg__cls-1"
      data-name="Path 205"
    />
  </svg>
);

export default SvgIcBack;
