import { useEffect, useRef } from 'react';
import { FormGroup, InputText } from '../Ui/Form/index';

export interface SetupStep1Props {

}

const SetupStep1: React.SFC<SetupStep1Props> = () => {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus()
  }, []);

  return (
    <div className="form-row mb-4">
      <FormGroup>
        <InputText
          ref={focusRef}
          labelTitle="First Name"
          name="firstName"
          placeholderTitle=""
          onChange={() => console.log('onChange')} />
      </FormGroup>
      <FormGroup>
        <InputText
          labelTitle="Last Name"
          name="lastName"
          placeholderTitle=""
          onChange={() => console.log('onChange')} />
      </FormGroup>
    </div>
  );
}

export default SetupStep1;