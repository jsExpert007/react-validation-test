import * as yup from 'yup';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export function emailValidation() {
  return yup
    .string()
    .matches(emailReg, 'Please enter valid email')
    .required('Please enter your email address');
};

const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<,>.])[A-Za-z\d!@#$%^&*()_\-+={[}\]|:;"'<,>.]{6,}$/;
export function passwordValidation() {
  return yup
    .string()
    .matches(passwordReg, 'Password must be at least 6 characters, with at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.')
    .required('Please enter your password');
};

export function cPasswordValidation() {
  return yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Please enter your confirm password');
};