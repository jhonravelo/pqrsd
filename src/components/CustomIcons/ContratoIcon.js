import * as React from 'react';

function SvgIconoContrato(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 88}
      height={props.size || 88}
      viewBox="0 0 88 88"
      xmlSpace="preserve"
      {...props}
    >
      <defs>
        <linearGradient
          id="icono_contrato_svg__a"
          x2={0.952}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#43e1ef" />
          <stop offset={1} stopColor="#21becc" />
        </linearGradient>
      </defs>
      <rect
        data-name="Rect\xE1ngulo 2"
        width={88}
        height={88}
        rx={8}
        fill="url(#icono_contrato_svg__a)"
      />
      <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={2}>
        <path
          data-name="Trazado 556"
          d="M59.384 40.659v18.726A4.615 4.615 0 0154.769 64H33.23a4.615 4.615 0 01-4.615-4.615v-30.77A4.615 4.615 0 0133.23 24h9.5a3.077 3.077 0 012.175.9l13.583 13.583a3.077 3.077 0 01.896 2.176z"
        />
        <path
          data-name="Trazado 557"
          d="M43.999 24.769v11.538a3.077 3.077 0 003.077 3.077h11.538m-22.307 7.693h15.385m-15.385 7.692h15.385"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default SvgIconoContrato;
