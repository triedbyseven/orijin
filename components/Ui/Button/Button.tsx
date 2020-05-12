import * as React from 'react';

export interface ButtonProps {
  mutationLoading?: boolean;
  onClick: any;
  maxWidth?: number;
  float?: string;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  mutationLoading,
  onClick,
  maxWidth,
  float = 'left',
}) => {
  return (
    <button
      type="submit"
      className={`float-${float}`}
      disabled={mutationLoading}
      onClick={onClick}
    >
      {children}
      <style jsx>{`
        button {
          ${maxWidth ? 'width: 100%;' : ''}
          height: calc(2.25rem + 0.75rem + 2px);
          max-width: ${maxWidth ? maxWidth + 'px' : 'inherit'};
          font-size: 16px;
          font-weight: 700;
          color: #111b60;
          background-color: #eef4fe;
          border-radius: 16px;
          border: 1px transparent;
          webkit-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
          -moz-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
          box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
          transition: none;
        }
        button:focus {
          outline: 0;
          webkit-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
          -moz-box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
          box-shadow: 25px 37px 34px 0px rgba(0,123,255,0.25);
        }
      `}</style>
    </button>
  );
};

export default Button;
