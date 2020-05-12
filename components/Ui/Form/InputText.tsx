import React, { forwardRef } from 'react';

export interface InputPriceProps {
  onChange: any;
  labelTitle: string;
  name: string;
  placeholderTitle: string;
  ref?: any;
}

const InputPrice: React.SFC<InputPriceProps> = forwardRef(({
  onChange,
  labelTitle,
  name,
  placeholderTitle,
}, ref: any) => {
  return (
    <>
      <label className="sr-only" htmlFor={`input${labelTitle}`}>
        {labelTitle}
      </label>
      <div className="label">
        <label htmlFor={`input${labelTitle}`}>
          {labelTitle}
        </label>
      </div>
      <div className="input-group mb-2">
        <input
          ref={ref}
          type="text"
          className="form-control"
          id={`input${labelTitle}`}
          placeholder={placeholderTitle}
          name={name}
          onChange={(e) => onChange(e)}
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
        `}</style>
    </>
  );
});

export default InputPrice;
