import React, { forwardRef } from 'react';

export interface InputPriceProps {
  onChange?: any;
  labelTitle: string;
  name: string;
  placeholderTitle: string;
  ref?: any;
  disable?: boolean;
  error?: boolean;
  type: string;
  isToggable?: boolean;
  onToggle?: any;
}

const InputPrice: React.SFC<InputPriceProps> = forwardRef(
  ({ onChange, labelTitle, name, placeholderTitle, disable = false, error = false, isToggable = false, onToggle, type }, ref: any) => {
    return (
      <>
        <label className="sr-only" htmlFor={`input-${name}`}>
          {labelTitle}
        </label>
        <div className="label">
          <label htmlFor={`input-${name}`}>{labelTitle}</label>
        </div>
        <div className="input-group mb-2">
          <input
            ref={ref}
            type={type}
            className={`form-control ${error ? 'is-invalid' : ''} ${error === false && error !== null ? 'is-valid' : ''}`}
            id={`input-${name}`}
            placeholder={placeholderTitle}
            name={name}
            onChange={onChange}
            disabled={disable}
            required
          />
          {isToggable ? (
            <div className="togglePassword" onClick={() => onToggle()}>
              <svg className="bi bi-eye" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
          ) : null}
        </div>
        <style jsx>{`
          .form-control {
            padding: 0.375rem 1rem;
            transition: none;
          }
          .label {
            margin-bottom: 14px;
            font-family: 'Montserrat';
            font-weight: 700;
          }
          label {
            margin: 0;
          }
          input {
            font-size: 16px;
            font-family: 'Montserrat';
            font-weight: 500;
            color: #000;
            height: calc(2.25rem + 0.75rem + 2px);
            background-color: #eef4fe;
            border: 1px solid #eef4fe;
            border-radius: 16px;
          }
          input:focus {
            outline: none;
            outline-style: none;
            box-shadow: none;
            background-color: #eef4fe;
            border-color: transparent;
            border: 1px solid #eef4fe;
          }
          .togglePassword {
            display: flex;
            width: 35px;
            align-items: center;
            justify-content: center;
            background-color: #eef4fe;
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
          }
          .form-control:disabled,
          .form-control[readonly] {
            background-color: #eef4fe;
          }
        `}</style>
      </>
    );
  }
);

export default InputPrice;
