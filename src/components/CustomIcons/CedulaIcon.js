import * as React from 'react';

function SvgCedula(props) {
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
          id="cedula_svg__a"
          x1={0.058}
          x2={1}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffce65" />
          <stop offset={1} stopColor="#eda203" />
        </linearGradient>
      </defs>
      <rect
        data-name="Rect\xE1ngulo 2"
        width={88}
        height={88}
        rx={8}
        fill="url(#cedula_svg__a)"
      />
      <g transform="rotate(-90 73.143 81.143)">
        <rect
          data-name="Rect\xE1ngulo 3"
          width={28.571}
          height={40}
          rx={2}
          transform="translate(96 32)"
          fill="none"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Trazado 558"
          d="M110.286 38.667v8.571"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Trazado 559"
          d="M117.026 63.918a3.54 3.54 0 001.117-2.632 3.546 3.546 0 00-1.11-2.638 3.642 3.642 0 00-2.768-.923 3.908 3.908 0 00-3.8 3.561 3.908 3.908 0 003.8 3.56 3.614 3.614 0 002.762-.928zm-14.6 3.412V55.241a1.076 1.076 0 01.372-.831 1.161 1.161 0 01.975-.246 5.729 5.729 0 013.809 2.616 8.344 8.344 0 011.275 4.506 8.344 8.344 0 01-1.272 4.505 5.729 5.729 0 01-3.809 2.616 1.161 1.161 0 01-.975-.246 1.076 1.076 0 01-.373-.832z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export default SvgCedula;
