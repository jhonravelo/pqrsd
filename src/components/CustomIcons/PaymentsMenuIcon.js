import React from 'react';

const SvgPaymentsMenuIcon = props => (
  <svg
    width={props.size || 15}
    height={props.size || 15}
    viewBox="0 0 15 15"
    {...props}
  >
    <g data-name="Grupo 749">
      <g data-name="Elipse 177" fill="none" stroke="#333" strokeWidth={0.6}>
        <circle cx={7.5} cy={7.5} r={7.5} stroke="none" />
        <circle cx={7.5} cy={7.5} r={7.2} />
      </g>
      <g data-name="smartphone-money-pay in-pay out-security" fill="#333">
        <path
          data-name="Trazado 760"
          d="M7.625 5.757a.735.735 0 01.735.735h.735a1.471 1.471 0 00-1.1-1.419v-.787h-.741v.788a1.468 1.468 0 00.368 2.89.735.735 0 11-.735.735h-.733a1.471 1.471 0 001.1 1.419v.788h.735v-.788a1.468 1.468 0 00-.368-2.89.736.736 0 110-1.471z"
        />
        <path
          data-name="Trazado 761"
          d="M4.508 4.475a4.417 4.417 0 000 6.24l.52-.52a3.681 3.681 0 010-5.2z"
        />
        <path
          data-name="Trazado 762"
          d="M10.745 4.475l-.52.52a3.681 3.681 0 010 5.2l.52.52a4.417 4.417 0 000-6.24z"
        />
      </g>
    </g>
  </svg>
);

export default SvgPaymentsMenuIcon;
