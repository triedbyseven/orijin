import * as React from 'react';
import { storiesOf } from '@storybook/react';
import useCustomHook from '../../customHooks/useCustomHook';

storiesOf('Query', module).add('using custom query hook', () => {
  const state = useCustomHook();
  console.log('State', state);
  return <h1>No data</h1>;
});
