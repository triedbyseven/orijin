import { useEffect, useState } from 'react';
import { FormGroup, InputText } from '../Ui/Form/index';

interface SetupStep2State {
  togglePassword: boolean;
}

interface SetupStep2Props {
  companyNameRef: any;
  emailRef: any;
  usernameRef: any;
  passwordRef: any;
  isCurrentStep: boolean;
  errors: any;
}

const SetupStep2: React.FC<SetupStep2Props> = ({
  companyNameRef,
  emailRef,
  usernameRef,
  passwordRef,
  isCurrentStep,
  errors,
}) => {
  const [state, updateState] = useState<SetupStep2State>({ togglePassword: false });

  useEffect(() => {
    if (!isCurrentStep)
      setTimeout(() => {
        companyNameRef.current.focus();
      }, 400);
  }, [isCurrentStep]);

  const togglePassword = () => updateState(prevState => ({ togglePassword: !prevState.togglePassword }))

  return (
    <div className="form-row mb-4">
      <FormGroup>
        <InputText
          type="text"
          ref={companyNameRef}
          labelTitle="Company Name"
          name="companyName"
          placeholderTitle=""
          disable={isCurrentStep}
          error={errors.inputErrors.companyName}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          type="text"
          ref={emailRef}
          labelTitle="Your Email"
          name="yourEmail"
          placeholderTitle=""
          disable={isCurrentStep}
          error={errors.inputErrors.email}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          type="text"
          ref={usernameRef}
          labelTitle="Username"
          name="username"
          placeholderTitle=""
          disable={isCurrentStep}
          error={errors.inputErrors.username}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          type={state.togglePassword ? 'text' : 'password'}
          ref={passwordRef}
          labelTitle="Password"
          name="password"
          placeholderTitle=""
          disable={isCurrentStep}
          error={errors.inputErrors.password}
          isToggable={true}
          onToggle={togglePassword}
        />
      </FormGroup>
    </div>
  );
};

export default SetupStep2;
