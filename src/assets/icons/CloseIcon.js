import React from 'react';
import styles from './Icon.scss';

const { rootClassName } = styles;

export const CloseIcon = ({ className, onClick }) => {
  return (
    <svg
      className={`${rootClassName} ${className}`}
      viewBox="-2 -2 26 26"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M1 1L21 21" stroke="currentColor" strokeLinecap="round" />
      <path d="M21 1L1 21" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
};
