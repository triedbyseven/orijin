import { useState, useRef } from 'react';
import { SetupStep1, SetupStep2 } from './';
import { ButtonSecondary, ButtonPrimary } from '../../components/Ui/Button';
import { ProgressBasic } from '../../components/Ui/Progress';
import gsap from 'gsap';

export interface SetUpformState {
  currentStep: Step;
  steps: Step[];
}

interface Step {
  id: number;
  index: number;
  step: any;
}

export interface SetUpformProps { }

const SetUpform: React.SFC<SetUpformProps> = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const companyNameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const steps = [
    {
      id: 1,
      index: 0,
      step: (isCurrentStep) => (
        <SetupStep1 firstNameRef={firstNameRef} lastNameRef={lastNameRef} isCurrentStep={isCurrentStep} />
      ),
    },
    {
      id: 2,
      index: 1,
      step: (isCurrentStep) => (
        <SetupStep2
          isCurrentStep={isCurrentStep}
          companyNameRef={companyNameRef}
          emailRef={emailRef}
          usernameRef={usernameRef}
          passwordRef={passwordRef}
        />
      ),
    },
  ];

  const [state, updateState] = useState<SetUpformState>({
    currentStep: steps[0],
    steps: steps,
  });

  const nextStep = () => {
    if (state.currentStep.index + 1 === state.steps.length) return;

    const newIndex = state.currentStep.index + 1;

    updateState({ currentStep: steps[newIndex], steps: steps });

    gsap.to('.animate-currentStep', 0.2, {
      opacity: 0,
      y: 25,
      ease: 'power4',
      onComplete: () => {
        gsap.to('.animate-currentStep', 0, {
          x: '-100%',
          ease: 'power4',
          onComplete: () => {
            gsap.to('.animate-currentStep', 0.2, {
              opacity: 1,
              y: 0,
              ease: 'power4',
            });
          },
        });
        // Updates state with new component and destroys old ones
        // updateState({ currentStep: steps[newIndex], steps: steps });
        // gsap.fromTo(
        //   '.animate-currentStep',
        //   0.3,
        //   { x: 10, y: 10, opacity: 0, ease: 'power3' },
        //   { x: 0, y: 0, opacity: 1, ease: 'power3' }
        // );
      },
    });
  };

  const lastStep = () => {
    if (state.currentStep.index === 0) return;

    const newIndex = state.currentStep.index - 1;

    updateState({ currentStep: steps[newIndex], steps: steps });

    // Animate out
    gsap.to('.animate-currentStep', 0.2, {
      opacity: 0,
      y: 50,
      ease: 'power4',
      onComplete: () => {
        gsap.to('.animate-currentStep', 0, {
          x: `${state.steps.length / 100}%`,
          ease: 'power4',
          onComplete: () => {
            gsap.to('.animate-currentStep', 0.2, {
              opacity: 1,
              y: 0,
              ease: 'power4',
            });
          },
        });
        // Updates state with new component and destroys old ones
        // updateState({ currentStep: steps[newIndex], steps: steps });
        // gsap.fromTo(
        //   '.animate-currentStep',
        //   0.5,
        //   { x: -10, y: 10, opacity: 0, ease: 'power3' },
        //   { x: 0, y: 0, opacity: 1, ease: 'power3' }
        // );
      },
    });
  };

  return (
    <>
      <ProgressBasic currentStep={state.currentStep} steps={state.steps} />
      <form>
        {state.steps.map((step) => (
          <div key={step.id} className="animate-currentStep">
            {step.step(step.id !== state.currentStep.id ? true : false)}
          </div>
        ))}
      </form>
      {state.currentStep.index > 0 ? (
        <ButtonSecondary ignoreIndex={true} mutationLoading={false} float="left" onClick={() => lastStep()}>
          Back
        </ButtonSecondary>
      ) : null}
      {state.currentStep.index < state.steps.length - 1 ? (
        <ButtonSecondary ignoreIndex={false} mutationLoading={false} float="right" onClick={() => nextStep()}>
          Next
        </ButtonSecondary>
      ) : null}
      {
        state.currentStep.index === state.steps.length - 1 ? (
          <ButtonPrimary mutationLoading={false} float="right" onClick={() => alert('Account created!')}>
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
          }
        `}
      </style>
    </>
  );
};

export default SetUpform;
