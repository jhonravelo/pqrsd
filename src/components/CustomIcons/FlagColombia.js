import React from 'react';

const SvgColombiaFlag = props => (
  <svg
    width={props.width || 16}
    height={props.height || 14}
    viewBox="0 0 16.285 14.435"
    {...props}
  >
    <g data-name="Grupo 353">
      <g data-name="Grupo 352">
        <path
          data-name="Trazado 376"
          d="M14.477 0H1.81A2.047 2.047 0 000 2.221v5h16.286v-5A2.047 2.047 0 0014.476 0"
          fill="#fbd116"
        />
        <path
          data-name="Trazado 377"
          d="M0 11.103h16.286V7.217H0z"
          fill="#22408c"
        />
        <path
          data-name="Trazado 378"
          d="M0 12.213a2.047 2.047 0 001.81 2.221h12.667a2.047 2.047 0 001.81-2.221v-1.11H0z"
          fill="#ce2028"
        />
      </g>
    </g>
  </svg>
);

export default SvgColombiaFlag;
