import React from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_SETUP } from '../graphql';

const Setup: React.FC = () => {
  const router = useRouter();
  const [runSetup, { loading: runSetupLoading }]: any = useMutation(MUTATION_SETUP, {
    onCompleted: () => {
      alert('Okay your ready to rock!');
      router.push('/');
    }
  });

  const startSetup = (success: boolean) => {
    runSetup({ variables: { success } });
  };

  const loadSpinner = () => {
    return (
      <div
        style={{ marginLeft: '1rem' }}
        className="spinner-border spinner-border-sm text-primary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>SetUp Page</h1>
      <p>All right your ready to run your website setup!</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => startSetup(true)}
      >
        Run SetUp
      </button>
      {runSetupLoading ? loadSpinner() : ''}
    </div>
  );
};

export default Setup;
