import { useEffect, useRef } from 'react';
import { FormGroup, InputText } from '../Ui/Form/index';

export interface SetupStep2Props {

}

const SetupStep2: React.SFC<SetupStep2Props> = () => {
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus()
  }, []);

  return (
    <div className="form-row mb-4">
      <FormGroup>
        <InputText
          ref={focusRef}
          labelTitle="Company Name"
          name="companyName"
          placeholderTitle=""
          onChange={() => console.log('onChange')} />
      </FormGroup>
      <FormGroup>
        <InputText
          labelTitle="Your Email"
          name="yourEmail"
          placeholderTitle=""
          onChange={() => console.log('onChange')} />
      </FormGroup>
      <FormGroup>
        <InputText
          labelTitle="Username"
          name="username"
          placeholderTitle=""
          onChange={() => console.log('onChange')} />
      </FormGroup>
      <FormGroup>
        <InputText
          labelTitle="Password"
          name="password"
          placeholderTitle=""
          onChange={() => console.log('onChange')} />
      </FormGroup>
    </div>
  );
}

export default SetupStep2;