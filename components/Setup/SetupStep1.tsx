import { useEffect } from 'react';
import { FormGroup, InputText } from '../Ui/Form/index';
import { onChangeText } from '../../utils/formHandlers';

export interface SetupStep1Props {
  firstNameRef: any;
  lastNameRef: any;
  isCurrentStep: boolean;
}

const SetupStep1: React.SFC<SetupStep1Props> = ({ firstNameRef = '', lastNameRef = '', isCurrentStep }) => {
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
        />
      </FormGroup>
      <FormGroup>
        <InputText
          ref={lastNameRef}
          labelTitle="Last Name"
          name="lastName"
          placeholderTitle=""
          disable={isCurrentStep}
        />
      </FormGroup>
    </div>
  );
};

export default SetupStep1;
