import { FormGroup, InputText } from '../Ui/Form/index';

export interface SetUpformProps {
}

const SetUpform: React.SFC<SetUpformProps> = () => {
    return (
        <form>
            <p>We just need a little information to get you started...</p>
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
            <style jsx>
                {`
                    p {
                        font-family: 'Montserrat';
                        font-weight: 500;
                        margin-bottom: 40px;
                    }
                `}
            </style>
        </form>
    );
}

export default SetUpform;