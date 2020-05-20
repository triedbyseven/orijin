import { useEffect } from 'react';
import { FormGroup, InputText } from '../Ui/Form/index';

export interface SetupStep1Props {
  firstNameRef: any;
  lastNameRef: any;
  isCurrentStep: boolean;
  errors: any;
}

const SetupStep1: React.SFC<SetupStep1Props> = ({ firstNameRef = '', lastNameRef = '', isCurrentStep, errors }) => {
  useEffect(() => {
    if (!isCurrentStep)
      setTimeout(() => {
        firstNameRef.current.focus();
      }, 400);
  }, [isCurrentStep]);

  return (
    <div className="form-row mb-4">
      <FormGroup>
        <InputText
          ref={firstNameRef}
          labelTitle="First Name"
          name="firstName"
          placeholderTitle=""
          disable={isCurrentStep}
          error={errors.inputErrors.firstName}
        />
      </FormGroup>
      <FormGroup>
        <InputText
          ref={lastNameRef}
          labelTitle="Last Name"
          name="lastName"
          placeholderTitle=""
          disable={isCurrentStep}
          error={errors.inputErrors.lastName}
        />
      </FormGroup>
    </div>
  );
};

export default SetupStep1;
