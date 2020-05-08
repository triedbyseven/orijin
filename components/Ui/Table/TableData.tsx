import React from 'react';

export interface TableDataProps {
  children: any;
}

const TableData: React.SFC<TableDataProps> = ({ children }) => {
  return (
    <td>
      {children}
      <style jsx>
        {`
          td {
            vertical-align: middle;
          }
        `}
      </style>
    </td>
  );
};

export default TableData;
