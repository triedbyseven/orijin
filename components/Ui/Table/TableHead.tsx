import React from 'react';

export interface TableHeadProps {
  children: any;
  className?: string;
}

const TableHead: React.SFC<TableHeadProps> = ({ className, children }) => {
  return (
    <thead className={className ? `${className}` : null}>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHead;
