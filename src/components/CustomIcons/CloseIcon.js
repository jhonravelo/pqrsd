import React from 'react';

const SvgCloseIcon = props => (
  <svg
    data-name="ic_close"
    width={props.size || 15.382}
    height={props.size || 15.382}
    viewBox={'0 0 15.382 15.382'}
    fill={'#b8b8b8'}
    {...props}
  >
    <path
      d="M15.382.7l-.7-.7-6.991 6.992L.7 0 0 .7l6.992 6.991L0 14.683l.7.7L7.691 8.39l6.992 6.992.7-.7L8.39 7.691z"
      data-name="001-cross"
    />
  </svg>
);

export default SvgCloseIcon;
