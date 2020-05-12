import { useState } from 'react';
import { SetupStep1, SetupStep2 } from './';
import { ButtonSecondary } from '../../components/Ui/Button';

export interface SetUpformState {
  currentStep: Step;
  steps: Step[];
}

interface Step {
  id: number;
  index: number;
  step: any;
}

export interface SetUpformProps {
}

const SetUpform: React.SFC<SetUpformProps> = () => {
  const steps = [{ id: 1, index: 0, step: () => <SetupStep1 /> }, { id: 2, index: 1, step: () => <SetupStep2 /> }];

  const [state, updateState] = useState<SetUpformState>({
    currentStep: steps[0],
    steps: steps,
  });

  const nextStep = () => {
    if (state.currentStep.index + 1 === state.steps.length) return;

    const newIndex = state.currentStep.index + 1;

    updateState({ currentStep: steps[newIndex], steps: steps });
  }

  return (
    <>
      <form>
        <p>We just need a little information to get you started...</p>
        {state.currentStep.step()}
      </form>
      <ButtonSecondary
        mutationLoading={false}
        float="right"
        onClick={() => nextStep()}>Next</ButtonSecondary>
      <style jsx>
        {`
          form {
            min-height: 266px;
          }
          p {
              font-family: 'Montserrat';
              font-weight: 500;
              margin-bottom: 40px;
          }
        `}
      </style>
    </>
  );
}

export default SetUpform;