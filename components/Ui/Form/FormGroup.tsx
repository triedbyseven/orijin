import * as React from 'react';

export interface FormGroupProps {}

const FormGroup: React.SFC<FormGroupProps> = ({ children }) => {
  return <div className="form-group col-md-6 mb-0">{children}</div>;
};

export default FormGroup;
