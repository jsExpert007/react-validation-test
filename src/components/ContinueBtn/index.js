import React from 'react';
import './style.scss';
import { ReactSVG } from 'react-svg';

export default function ContinueBtn({
  className = '',
  leftIcon,
  rightIcon,
  btnText = "Next",
  disabled = false,
  type = 'button',
  onClick,
}) {


  return (
    <button
      className={`continue-btn cursor-pointer v-c h-c ${className} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-tour="physical-2 virtual-3">
      {leftIcon ? <ReactSVG src={leftIcon} className='left-icon' /> : null}
      <div className='btn-txt'>{btnText}</div>
      {rightIcon ? <ReactSVG src={rightIcon} className='right-icon' /> : null}
    </button >
  );
}
