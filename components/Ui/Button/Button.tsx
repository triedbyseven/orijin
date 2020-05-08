import * as React from 'react';

export interface ButtonProps {
  mutationLoading: any;
  onClick: any;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  mutationLoading,
  onClick,
}) => {
  return (
    <button
      type="submit"
      className="btn btn-outline-primary float-right"
      disabled={mutationLoading}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
