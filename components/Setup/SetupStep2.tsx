import { useEffect } from 'react';
import { FormGroup, InputText } from '../Ui/Form/index';

export interface SetupStep2Props {
  companyNameRef: any;
  emailRef: any;
  usernameRef: any;
  passwordRef: any;
  isCurrentStep: boolean;
}

const SetupStep2: React.SFC<SetupStep2Props> = ({
  companyNameRef,
  emailRef,
  usernameRef,
  passwordRef,
  isCurrentStep,
}) => {
  useEffect(() => {
    if (!isCurrentStep)
      setTimeout(() => {
        companyNameRef.current.focus();
      }, 400);
  }, [isCurrentStep]);

  return (
    <div className="form-row mb-4">
      <FormGroup>
        <InputText
          ref={companyNameRef}
          labelTitle="Company Name"
          name="companyName"
          placeholderTitle=""
          disable={isCurrentStep}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          ref={emailRef}
          labelTitle="Your Email"
          name="yourEmail"
          placeholderTitle=""
          disable={isCurrentStep}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          ref={usernameRef}
          labelTitle="Username"
          name="username"
          placeholderTitle=""
          disable={isCurrentStep}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          ref={passwordRef}
          labelTitle="Password"
          name="password"
          placeholderTitle=""
          disable={isCurrentStep}
        />
      </FormGroup>
    </div>
  );
};

export default SetupStep2;
