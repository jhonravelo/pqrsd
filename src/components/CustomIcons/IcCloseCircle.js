import * as React from 'react';

function SvgIcCloseCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 18}
      height={props.size || 16}
      {...props}
    >
      <path d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm2.9 10.027a.615.615 0 11-.87.87L8 8.87 5.973 10.9a.615.615 0 01-.87-.87L7.13 8 5.1 5.973a.615.615 0 01.87-.87L8 7.13l2.027-2.03a.615.615 0 01.87.87L8.87 8z" />
    </svg>
  );
}

export default SvgIcCloseCircle;
