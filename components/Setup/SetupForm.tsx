import { useState, useRef } from 'react';
import { SetupStep1, SetupStep2 } from './';
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
  ];

  const [state, updateState] = useState<SetUpformState>({
    currentStep: steps[0],
    steps: steps,
  });
  const [errors, updateErrors] = useState<SetUpformStateErrors>({
    allErrors: [],
    inputErrors: {
      firstName: false,
      lastName: false,
      email: false,
      companyName: false,
      username: false,
      password: false,
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
        {state.steps.map((step) => (
          <div key={step.id} className="animate-currentStep">
            {step.step(step.id !== state.currentStep.id ? true : false, errors)}
          </div>
        ))}
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
            overflow: hidden;
            display: flex;
            min-height: 200px;
          }
          p {
            font-family: 'Montserrat';
            font-weight: 500;
            margin-bottom: 40px;
          }
          .animate-currentStep {
            width: 100%;
            flex-shrink: 0;
            opacity: 1;
            padding: 0 .25rem;
          }
        `}
      </style>
    </>
  );
};

export default SetUpform;
