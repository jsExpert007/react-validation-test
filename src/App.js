import './App.scss';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  Container,
  ContinueBtn,
  FormInput,
  PasswordRequirement,
} from 'src/components';
import {
  emailValidation,
  passwordValidation,
  cPasswordValidation
} from 'src/utils/validation';

function App() {

  const initialLoginInfo = {
    email: '',
    password: '',
    cPassword: '',
  };

  const createLoginSchema = yup.object().shape({
    email: emailValidation(),
    password: passwordValidation(),
    cPassword: cPasswordValidation(),
  });

  const onNext = (v) => {
    const payload = {
      email: v.email,
      password: v.password,
    };
    console.log("payload", payload)
    alert('Validation Success!');
  };

  return (
    <div className="App">
      <Container>
        <Formik
          initialValues={initialLoginInfo}
          validationSchema={createLoginSchema}
          onSubmit={onNext}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid,
            dirty,
          }) => (
            <div className="create-login">
              <FormInput
                isLabel
                label={"Email"}
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
              />
              <FormInput
                isLabel
                type="password"
                label={"Create password"}
                value={values.password}
                onChange={handleChange('password')}
                error={errors.password}
              />
              <FormInput
                isLabel
                type="password"
                label={"Confirm Password"}
                value={values.cPassword}
                onChange={handleChange('cPassword')}
                error={errors.cPassword}
              />
              <PasswordRequirement />
              <ContinueBtn
                btnText={"Continue"}
                className={'next-btn'}
                disabled={!(isValid && dirty)}
                onClick={handleSubmit}
              />
            </div>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default App;
