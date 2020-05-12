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
          padding: ${maxWidth ? '0 0' : '0 2.25rem'};
          background-color: #eef4fe;
          border-radius: 16px;
          border: 1px solid transparent;
          webkit-box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.25);
          -moz-box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.25);
          box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.25);
          transition: 1s;
        }
        button:hover { 
           webkit-box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.45);
          -moz-box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.45);
          box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.45);
        }
        button:focus {
          outline: 0;
           webkit-box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.45);
          -moz-box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.45);
          box-shadow: 10px 10px 37px 0px rgba(0,123,255,0.45);
        }
      `}</style>
    </button>
  );
};

export default Button;
