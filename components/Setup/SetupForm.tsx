import { useState } from 'react';
import { SetupStep1, SetupStep2 } from './';

export interface SetUpformState {
  initialStep: any;
  steps: any;
}

export interface SetUpformProps {
}

const SetUpform: React.SFC<SetUpformProps> = () => {
  const steps = [{ id: 0, index: 0, step: () => <SetupStep1 /> }, { id: 1, index: 1, step: () => <SetupStep2 /> }];

  const [state, updateState] = useState<SetUpformState>({
    initialStep: steps[0],
    steps: steps
  });

  const nextStep = () => {
    const newIndex = state.initialStep.index + 1;

    updateState(prevState => ({ initialStep: newIndex, ...prevState }))
  }

  return (
    <form>
      <p>We just need a little information to get you started...</p>
      {state.initialStep.step()}
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