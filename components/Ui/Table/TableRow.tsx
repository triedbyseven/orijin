import React from 'react';

export interface TableRowProps {
  children: any;
}

const TableRow: React.SFC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
