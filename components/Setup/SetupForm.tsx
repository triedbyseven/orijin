import { useState, useRef } from 'react';
import { SetupStep1, SetupStep2, SetupStep3 } from './';
import { ButtonSecondary, ButtonPrimary } from '../../components/Ui/Button';
import { ProgressBasic } from '../../components/Ui/Progress';
import { nextStep, lastStep } from '../../utils/formHandlers';
import { Step, InputErrors } from '../../interfaces/setupform/SetUpformState';

interface SetUpFormProps {
  startSetup: any;
  runSetupLoading: boolean;
}

export interface SetUpformState {
  currentStep: Step;
  steps: Step[];
}

interface SetUpformStateErrors {
  allErrors: string[],
  inputErrors: InputErrors
}

const SetUpform: React.FC<SetUpFormProps> = ({ startSetup, runSetupLoading }) => {
  const firstNameRef: any = useRef('');
  const lastNameRef: any = useRef('');
  const companyNameRef: any = useRef('');
  const emailRef: any = useRef('');
  const usernameRef: any = useRef('');
  const passwordRef: any = useRef('');

  const refs = { firstNameRef, lastNameRef, companyNameRef, emailRef, usernameRef, passwordRef };

  const steps = [
    {
      id: 1, index: 0, step: (isCurrentStep, errors) => (
        <SetupStep1 firstNameRef={firstNameRef} lastNameRef={lastNameRef} isCurrentStep={isCurrentStep} errors={errors} />
      ),
    },
    {
      id: 2, index: 1, step: (isCurrentStep, errors) => (
        <SetupStep2 isCurrentStep={isCurrentStep} companyNameRef={companyNameRef} emailRef={emailRef} usernameRef={usernameRef} passwordRef={passwordRef} errors={errors} />
      ),
    },
    {
      id: 3, index: 2, step: (isCurrentStep, errors, refs) => (
        <SetupStep3 refs={refs} />
      ),
    },
  ];

  const [state, updateState] = useState<SetUpformState>({
    currentStep: steps[0],
    steps: steps,
  });
  const [errors, updateErrors] = useState<SetUpformStateErrors>({
    allErrors: [],
    inputErrors: {
      firstName: null,
      lastName: null,
      email: null,
      companyName: null,
      username: null,
      password: null,
    }
  });

  const capatalizeCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const createAccount = async () => {
    const firstName: string = capatalizeCase(firstNameRef.current.value).trim();
    const lastName: string = capatalizeCase(lastNameRef.current.value).trim();
    const companyName: string = capatalizeCase(companyNameRef.current.value).trim();
    const fullName: string = `${firstName} ${lastName}`;
    startSetup(true, companyName, fullName, usernameRef.current.value, emailRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <h2>Sign Up</h2>
      <ProgressBasic currentStep={state.currentStep} steps={state.steps} />
      {state.currentStep.index !== 2 ? <p>We just need a few details from you...</p> : <p>...please check if everything looks good.</p>}
      <form>
        <div className="slider-wrapper">
          {state.steps.map((step) => (
            <div key={step.id} className="step">
              {step.step(step.id !== state.currentStep.id ? true : false, errors, refs)}
            </div>
          ))}
        </div>
      </form>
      {state.currentStep.index > 0 ? (
        <ButtonSecondary ignoreIndex={true} mutationLoading={false} float="left" onClick={() => lastStep(state, steps, updateState)}>
          Back
        </ButtonSecondary>
      ) : null}
      {state.currentStep.index < state.steps.length - 1 ? (
        <ButtonSecondary ignoreIndex={false} mutationLoading={false} float="right" onClick={() => nextStep(state, steps, updateState, updateErrors, refs)}>
          Next
        </ButtonSecondary>
      ) : null}
      {
        state.currentStep.index === state.steps.length - 1 ? (
          <ButtonPrimary mutationLoading={runSetupLoading} float="right" onClick={() => createAccount()}>
            Create My Account
          </ButtonPrimary>) : null
      }
      <style jsx>
        {`
          form {
            position: relative;
            overflow: hidden;
            min-height: 210px;
          }
          .slider-wrapper {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            overflow:hidden;
          }
          h2 {
            font-size: 50px;
            font-family: 'Montserrat';
            font-weight: 600;
            text-align: center;
            margin-bottom: 3rem;
          }
          p {
            font-family: 'Montserrat';
            font-weight: 500;
            margin-bottom: 40px;
            text-align: center;
          }
          .step {
            position: relative;
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            padding: 0 .325rem;
          }
        `}
      </style>
    </>
  );
};

export default SetUpform;
