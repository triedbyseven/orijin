import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  text: string;
};

export default ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="btn btn-outline-primary"
      onClick={() => alert('Yes!')}
    >
      {text}
    </button>
  );
};
