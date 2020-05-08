import React from 'react';

export interface InputPriceProps {
  onChange: any;
  labelTitle: string;
  name: string;
  placeholderTitle: string;
}

const InputPrice: React.SFC<InputPriceProps> = ({
  onChange,
  labelTitle,
  name,
  placeholderTitle,
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
          type="text"
          className="form-control"
          id={`input${labelTitle}`}
          placeholder={placeholderTitle}
          name={name}
          onChange={(e) => onChange(e)}
          required
        />
        <style jsx>{`
          .form-control {
            padding: 0.375rem 0rem;
            transition: none;
          }
          input {
            font-size: 20px;
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
        `}</style>
      </div>
    </>
  );
};

export default InputPrice;
