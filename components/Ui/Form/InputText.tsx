import React, { forwardRef } from 'react';

export interface InputPriceProps {
  onChange?: any;
  labelTitle: string;
  name: string;
  placeholderTitle: string;
  ref?: any;
  disable?: boolean;
  error?: boolean;
}

const InputPrice: React.SFC<InputPriceProps> = forwardRef(
  ({ onChange, labelTitle, name, placeholderTitle, disable = false, error = false }, ref: any) => {
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
            type="text"
            className={`form-control ${error ? 'is-invalid' : ''} ${error === false && error !== null ? 'is-valid' : ''}`}
            id={`input-${name}`}
            placeholder={placeholderTitle}
            name={name}
            onChange={onChange}
            disabled={disable}
            required
          />
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
            border: 1px solid transparent;
            border-radius: 16px;
          }
          input:focus {
            outline: none;
            outline-style: none;
            box-shadow: none;
            background-color: #eef4fe;
            border-color: transparent;
            border: 1px solid transparent;
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
