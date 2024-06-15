import React from 'react';

const Edit = ({
  color = '#0F172A',
  width = 16,
  height = 16,
  style = {},
  className = '',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ ...style, width, height }}
    className={className}
    {...props}
  >
    <path
      d='M7.33337 1.33203H6.00004C2.66671 1.33203 1.33337 2.66536 1.33337 5.9987V9.9987C1.33337 13.332 2.66671 14.6654 6.00004 14.6654H10C13.3334 14.6654 14.6667 13.332 14.6667 9.9987V8.66536'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.6934 2.01545L5.44004 7.26879C5.24004 7.46879 5.04004 7.86212 5.00004 8.14879L4.71337 10.1555C4.60671 10.8821 5.12004 11.3888 5.84671 11.2888L7.85337 11.0021C8.13337 10.9621 8.52671 10.7621 8.73338 10.5621L13.9867 5.30879C14.8934 4.40212 15.32 3.34879 13.9867 2.01545C12.6534 0.682122 11.6 1.10879 10.6934 2.01545Z'
      stroke={color}
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.94006 2.76562C10.3867 4.35896 11.6334 5.60563 13.2334 6.05896'
      stroke={color}
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Edit;
