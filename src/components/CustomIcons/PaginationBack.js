import * as React from 'react';

function SvgPaginationBack(props) {
  return (
    <svg
      id="svg_page_back"
      data-name="Page back"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="#696a6a"
      {...props}
    >
      <g
        data-name="Arrow Left \u2013 1"
        clipPath="url(#pagination_back_svg__a)"
      >
        <path
          data-name="Path 10"
          d="M8 16l1.455-1.455-5.506-5.506H16V6.961H3.948l5.507-5.506L8 0 0 8z"
        />
      </g>
    </svg>
  );
}

export default SvgPaginationBack;
