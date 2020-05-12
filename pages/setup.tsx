import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_SETUP } from '../graphql';
import { SetUpForm } from '../components/Setup';
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
              <div className="progessbar-container mb-5">
                <div className="step">1</div>
                <div className="step">2</div>
                <div className="step">3</div>
              </div>
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
          .progessbar-container {
            display: flex;
            justify-content: space-between;
            padding: 0 3rem;
          }

          .progessbar-container .step {
            width: 30px;
            height: 30px;
            font-family: 'Montserrat';
            line-height: 30px;
            text-align: center;
            background-color: #eef4fe;
            border-radius: 22px;
            webkit-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
            -moz-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
            box-shadow: 0px 10px 24px 0px rgba(0,123,255,0.30);
          }

          .progessbar-container .active{
            border: 1px solid #111b60;
          }
        `}
      </style>
    </div>
  );
};

export default Setup;
