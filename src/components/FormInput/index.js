import React, { useState } from 'react';
import './style.scss';
import { ReactSVG } from 'react-svg';
import EyeClosedIcon from 'src/assets/images/eye-icon.svg';
import EyeOpenIcon from 'src/assets/images/eye-open-icon.svg';

export default function FormInput({
  className = '',
  inputClassName = '',
  type = "text",
  isLabel,
  label = '',
  placeholder = '',
  value,
  error = '',
  maxLength = undefined,
  onChange,
  isOptional = false,
  disabled = false
}) {

  const [isFocused, setIsFocused] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const onToggleEye = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="input-component">
      <div className={`input-container ${className} ${value || isFocused ? 'active' : ''}`} >
        {(isFocused || value || isLabel) ? (
          <div className='input-label'>{label || placeholder}</div>
        ) : null}
        <div className='input-content flex-between-center'>
          <input
            type={inputType}
            className={`main-input ${inputClassName}`}
            placeholder={isFocused ? '' : placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            maxLength={maxLength}
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
            autoComplete="off"
          />
          {type === 'password' ?
            <ReactSVG
              className='eye-icon cursor-pointer'
              src={inputType === 'password' ? EyeClosedIcon : EyeOpenIcon}
              onClick={onToggleEye}
            />
            : null}
          {isOptional ? <span>Optional</span> : null}
        </div>
      </div >
      {(value && !isFocused) ? <div className='error'>{error}</div> : null}
    </div >
  );
}
