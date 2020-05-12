import { FormGroup, InputText } from '../Ui/Form/index';

export interface SetupStep1Props {

}

const SetupStep1: React.SFC<SetupStep1Props> = () => {
  return (
    <div className="form-row mb-4">
      <FormGroup>
        <InputText
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