import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_SETUP } from '../graphql';
import { SetUpForm } from '../components/Setup';
import { ProgressBasic } from '../components/Ui/Progress';
import { Button } from '../components/Ui/Button'
import FadeIn from '../components/Ui/Animation/FadeIn';

const Setup: React.FC = () => {
  const router = useRouter();
  const [height, updateHeight] = useState(0);
  const [runSetup, { loading: runSetupLoading }]: any = useMutation(MUTATION_SETUP, {
    onCompleted: () => {
      alert('Okay your ready to rock!');
      router.push('/');
    }
  });

  useEffect(() => {
    updateHeight(window.innerHeight);
  }, []);

  const startSetup = (success: boolean) => {
    runSetup({ variables: { success } });
  };

  return (
    <div className="col">
      <div className="container">
        <div className="row align-items-center veritcalAlign">
          <div className="col">
            <FadeIn>
              <ProgressBasic />
              <h1>Welcome to Orijin.</h1>
              <SetUpForm />
              <Button
                maxWidth={300}
                mutationLoading={false}
                float="right"
                onClick={() => console.log('Next page')}>Next</Button>
            </FadeIn>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 650px;
          }
          .veritcalAlign {
            height: ${height}px
          }
          h1 {
            font-family: 'Montserrat';
            font-weight: 900;
          }
        `}
      </style>
    </div>
  );
};

export default Setup;
