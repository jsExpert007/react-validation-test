import React from 'react';
import './style.scss';
import WarningIcon from 'src/assets/images/warning-icon.svg';
import RequirementItem from './RequirementItem';

export default function PasswordRequirement({
  className = ''
}) {

  return (
    <div className={`password-requirement-component ${className}`}>
      <div className='v-c' >
        <img src={WarningIcon} className='warning-icon' alt='warning-icon' />
        <h5>{"Password requirements:"}</h5>
      </div>
      <RequirementItem description={"1 upper case letter [A-Z]"} />
      <RequirementItem description={"1 lower case letter [A-Z]"} />
      <RequirementItem description={"1 number [0-9]"} />
      <RequirementItem description={`1 special character [!@#$%^&*()_-+={[}]|:;"'<,>.]`} />
      <RequirementItem description={"must be at least 6 characters"} />
    </div>
  );
}
