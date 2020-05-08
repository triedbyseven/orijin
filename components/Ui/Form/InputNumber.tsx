import React from 'react';

export interface InputNumberProps {
  onChange: any;
  labelTitle: string;
  name: string;
  value: number;
}

const InputNumber: React.SFC<InputNumberProps> = ({
  onChange,
  labelTitle,
  name,
  value,
}) => {
  return (
    <>
      <label className="sr-only" htmlFor={`input${labelTitle}`}>
        {labelTitle}
      </label>
      <label className="mb-0" htmlFor={`input${labelTitle}`}>
        {labelTitle}
      </label>
      <div className="input-group mb-2">
        <input
          type="number"
          className="form-control"
          id={`input${labelTitle}`}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
      <style jsx>
        {`
          label {
            text-transform: capitalize;
          }
          .form-control {
            padding: 0.375rem 0rem;
            transition: none;
          }
          .input-group-text {
            font-size: 18px;
            padding: 0.375rem 0.3rem 0.375rem 0.75rem;
            background-color: #fff;
            border: none;
          }
          input {
            font-size: 18px;
            height: calc(2rem + 0.75rem + 2px);
            background-color: transparent;
            border: 1px solid transparent;
          }
          input:focus {
            outline: none;
            outline-style: none;
            box-shadow: none;
            border-color: transparent;
            border: 1px solid transparent;
          }
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type='number'] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </>
  );
};

export default InputNumber;
