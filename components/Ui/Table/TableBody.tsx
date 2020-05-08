import React from 'react';

export interface TableBodyProps {
  children: any;
}

const TableBody: React.SFC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
