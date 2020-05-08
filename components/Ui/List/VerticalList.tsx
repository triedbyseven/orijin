import React from 'react';

export interface VerticalListProps {
  children: any;
}

const VerticalList: React.SFC<VerticalListProps> = ({ children }) => {
  return (
    <ul className="list-group list-group-horizontal list-group-flush">
      {children}
    </ul>
  );
};

export default VerticalList;
