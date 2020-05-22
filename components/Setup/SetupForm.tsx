import { useState, useRef } from 'react';
import { SetupStep1, SetupStep2, SetupSuccess } from './';
import { ButtonSecondary, ButtonPrimary } from '../../components/Ui/Button';
import { ProgressBasic } from '../../components/Ui/Progress';
import { setupFormSchema } from '../../utils/formValidation';
import { nextStep, lastStep } from '../../utils/formHandlers';
import { Step, InputErrors } from '../../interfaces/setupform/SetUpformState';

export interface SetUpformState {
  currentStep: Step;
  steps: Step[];
}

interface SetUpformStateErrors {
  allErrors: string[],
  inputErrors: InputErrors
}

const SetUpform: React.FC = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const companyNameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

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
      id: 3, index: 2, step: (isCurrentStep, errors) => (
        <SetupSuccess />
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
  })

  const createAccount = async () => {
    const values = { firstName: firstNameRef.current.value, lastName: lastNameRef.current.value, companyName: companyNameRef.current.value, email: emailRef.current.value, username: usernameRef.current.value, password: passwordRef.current.value }

    try {
      const res = await setupFormSchema.validate(values, { abortEarly: false });

      console.log(res);
    } catch (err) {
      let inputErrors: any = {};

      for (const key of err.inner) {
        inputErrors[key.path] = key.path ? true : false;
      };

      console.log(inputErrors);
      console.log(err);

      updateErrors({ allErrors: err.errors, inputErrors });
    }
  }

  return (
    <>
      <ProgressBasic currentStep={state.currentStep} steps={state.steps} />
      <form>
        <div className="slider-wrapper">
          {state.steps.map((step) => (
            <div key={step.id} className="step">
              {step.step(step.id !== state.currentStep.id ? true : false, errors)}
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
        <ButtonSecondary ignoreIndex={false} mutationLoading={false} float="right" onClick={() => nextStep(state, steps, updateState)}>
          Next
        </ButtonSecondary>
      ) : null}
      {
        state.currentStep.index === state.steps.length - 1 ? (
          <ButtonPrimary mutationLoading={false} float="right" onClick={() => createAccount()}>
            Create My Account
          </ButtonPrimary>) : null
      }
      <style jsx>
        {`
          form {
            position: relative;
            overflow: hidden;
            min-height: 200px;
          }
          .slider-wrapper {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            overflow:hidden;
          }
          p {
            font-family: 'Montserrat';
            font-weight: 500;
            margin-bottom: 40px;
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
