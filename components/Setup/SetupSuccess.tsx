import { useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../public/lotties/8586-rocket-in-space.json';
import { ButtonPrimary } from '../Ui/Button/index';

export interface SetupSuccessProps {
  router: any;
}

interface SetupSuccessState {
  isStopped: boolean;
  isPaused: boolean;
}

const SetupSuccess: React.FC<SetupSuccessProps> = ({ router }) => {
  const [lottie, setLottie] = useState<SetupSuccessState>({ isStopped: false, isPaused: false });


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <h2>Welcome to Orijin</h2>
      <p>We're excited you have choosen us to help manage your your content.</p>

      <Lottie options={defaultOptions}
        style={{ marginBottom: '1rem' }}
        height={400}
        width={400}
        isStopped={lottie.isStopped}
        isPaused={lottie.isPaused} />
      <div style={{ textAlign: 'center' }}>
        <ButtonPrimary mutationLoading={false} float="" onClick={() => router.push('/dashboard')}>
          To Dashboard
          </ButtonPrimary>
      </div>
      <style jsx>
        {`
          h2 {
            font-size: 50px;
            font-family: 'Montserrat';
            font-weight: 800;
            text-align: center;
            margin-bottom: 3rem;
          }
          p {
            font-size: 16px;
            font-family: 'Montserrat';
            font-weight: 500;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

export default SetupSuccess;