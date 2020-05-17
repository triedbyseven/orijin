import { useState } from 'react';
import { SetupStep1, SetupStep2 } from './';
import { ButtonSecondary } from '../../components/Ui/Button';
import { ProgressBasic } from '../../components/Ui/Progress';
import gsap from 'gsap';

export interface SetUpformState {
  currentStep: Step;
  steps: Step[];
  formValues?: FormValues;
}

interface Step {
  id: number;
  index: number;
  step: any;
}

interface FormValues {
  firstName: string;
  lastName: string;
}

export interface SetUpformProps {}

const SetUpform: React.SFC<SetUpformProps> = () => {
  const steps = [
    { id: 1, index: 0, step: () => <SetupStep1 formValues={state.formValues} /> },
    { id: 2, index: 1, step: () => <SetupStep2 /> },
  ];

  const [state, updateState] = useState<SetUpformState>({
    currentStep: steps[0],
    steps: steps,
    formValues: {
      firstName: '',
      lastName: '',
    },
  });

  const nextStep = () => {
    if (state.currentStep.index + 1 === state.steps.length) return;

    const newIndex = state.currentStep.index + 1;

    gsap.to('.animate-currentStep', 0.3, {
      x: -10,
      y: 10,
      opacity: 0,
      ease: 'power3',
      onComplete: () => {
        // Updates state with new component and destroys old ones
        updateState({ currentStep: steps[newIndex], steps: steps });
        gsap.fromTo(
          '.animate-currentStep',
          0.3,
          { x: 10, y: 10, opacity: 0, ease: 'power3' },
          { x: 0, y: 0, opacity: 1, ease: 'power3' }
        );
      },
    });
  };

  const lastStep = () => {
    if (state.currentStep.index === 0) return;

    const newIndex = state.currentStep.index - 1;

    // Animate out
    gsap.to('.animate-currentStep', 0.5, {
      x: 10,
      y: 10,
      opacity: 0,
      ease: 'power3',
      onComplete: () => {
        // Updates state with new component and destroys old ones
        updateState({ currentStep: steps[newIndex], steps: steps });
        gsap.fromTo(
          '.animate-currentStep',
          0.5,
          { x: -10, y: 10, opacity: 0, ease: 'power3' },
          { x: 0, y: 0, opacity: 1, ease: 'power3' }
        );
      },
    });
  };

  return (
    <>
      <ProgressBasic />
      <form>
        <div className="animate-currentStep">{state.currentStep.step()}</div>
      </form>
      {state.currentStep.index > 0 ? (
        <ButtonSecondary mutationLoading={false} float="left" onClick={() => lastStep()}>
          Back
        </ButtonSecondary>
      ) : null}
      {console.log(state.steps.length)}
      {state.currentStep.index < state.steps.length - 1 ? (
        <ButtonSecondary mutationLoading={false} float="right" onClick={() => nextStep()}>
          Next
        </ButtonSecondary>
      ) : null}
      <style jsx>
        {`
          form {
            min-height: 200px;
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
};

export default SetUpform;
