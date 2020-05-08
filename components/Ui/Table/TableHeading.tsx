import React from 'react';

export interface TableHeadingProps {
  children?: any;
  width?: number;
}

const TableHeading: React.SFC<TableHeadingProps> = ({ width, children }) => {
  return (
    <th scope="col" style={{ width: `${width}px` }}>
      {children}
    </th>
  );
};

export default TableHeading;
