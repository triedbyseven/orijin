// src/stories/Button.stories.tsx

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from '../../components/Spinner';

storiesOf('Spinner', module).add('centered', () => {
  return <Spinner />;
});
