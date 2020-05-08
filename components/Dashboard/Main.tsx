import React from 'react';

export interface MainProps {
  data: any;
}

const Main: React.SFC<MainProps> = ({ data }) => {
  return (
    <div className="col pt-5">
      <div className="container">
        <h2>Dashboard - {data.getGlobalConfig.businessName}</h2>
        <p>Welcome back {data.getGlobalConfig.fullName}!</p>
      </div>
    </div>
  );
};

export default Main;
