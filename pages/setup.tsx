import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_SETUP } from '../graphql';
import { SetupForm, SetupSuccess } from '../components/Setup';
import FadeIn from '../components/Ui/Animation/FadeIn';

const Setup: React.FC = () => {
  useWindowSize();
  const router = useRouter();
  const [height, updateHeight] = useState(0);
  const [runSetup, { loading: runSetupLoading }]: any = useMutation(MUTATION_SETUP, {
    onCompleted: () => {
      alert('Okay your ready to rock!');
      setSuccess(true);
    },
  });
  const [success, setSuccess]: any = useState(false);

  useEffect(() => {
    updateHeight(window.innerHeight);
  }, []);

  // Hook
  function useWindowSize() {
    const isClient = typeof window === 'object';

    useEffect((): any => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        updateHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  }

  const startSetup = (success: boolean) => {
    runSetup({ variables: { success } });
  };

  return (
    <div className="col">
      <div className="container">
        <div className="row align-items-center veritcalAlign">
          <div className="col">
            <FadeIn>
              {success ? <SetupSuccess router={router} /> : <SetupForm />}
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
            height: ${height}px;
            max-height: ${height}px;
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
