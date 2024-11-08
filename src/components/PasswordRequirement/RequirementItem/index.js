import React from 'react';
import './style.scss';

export default function RequirementItem({
  className = '',
  description,
}) {

  return (
    <div className={`requirement-item-component v-c ${className}`}>
      <div className='dot center'>{`•`}</div>
      <div className='requirement-detail'>{description}</div>
    </div>
  );
}
