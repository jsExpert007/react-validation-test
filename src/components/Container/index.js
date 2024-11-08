import React from 'react';
import './style.scss';

export default function Container({
  className = '',
  children,
}) {
  return (
    <div className="container-component">
      <div className={`container-content shadow-object ${className}`}>
        {children}
      </div>
    </div>
  );
}
