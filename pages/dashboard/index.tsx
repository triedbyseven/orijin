import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_GLOBAL_CONFIG } from '../../graphql';
import ToastContainer from '../../components/ToastContainer';
import { Growing } from '../../components/Ui/Spinner';
import { Alert } from '../../components/Ui/Alerts';
import { Main } from '../../components/Dashboard';

interface GetGlobalConfigData {
  getGlobalConfig: ProductInventory;
}

interface ProductInventory {
  businessName: string;
  fullName: string;
}

const Dashboard: React.FC = () => {
  //   const [notifications, updateNotifications] = useState([]);

  // Querys
  const { loading, error, data } = useQuery<GetGlobalConfigData>(
    QUERY_GLOBAL_CONFIG,
    {
      onError: (error) => {
        console.log(error);
      },
      onCompleted: (data) => {
        console.log('QUERY_GLOBAL_CONFIG Completed!');
      },
    }
  );

  // Local Methods
  //   const removeNotification = (id: number) => {
  //     const data = notifications;
  //     const toasts = data.filter((item): any => item.id !== id);

  //     updateNotifications(toasts);
  //   };

  if (loading) {
    return <Growing visible={true} fullScreen={true} />;
  }

  if (error)
    return (
      <div className="container">
        <Alert type="danger">Network Error.</Alert>
      </div>
    );

  return (
    <>
      {/* <ToastContainer
        allToasts={notifications}
        removeNotification={removeNotification}
      /> */}
      <Main data={data} />
    </>
  );
};

export default Dashboard;
