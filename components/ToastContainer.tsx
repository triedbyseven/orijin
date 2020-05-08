import React, { useEffect } from 'react';
import Toast from './Toast';

export interface ToastContainerProps {
  allToasts: any;
  removeNotification: any;
}

export interface ToastMappedProps {
  id: number;
  title: string;
  text: string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  allToasts: toasts,
  removeNotification,
}) => {
  return (
    <div className="container">
      {toasts.map(({ id, title, text }: ToastMappedProps) => (
        <Toast
          key={id}
          id={id}
          title={title}
          text={text}
          removeNotification={removeNotification}
        />
      ))}
      <style jsx>
        {`
          .container {
            z-index: 9999;
            position: absolute;
            top: 15px;
            right: 0;
            width: 350px;
          }
        `}
      </style>
    </div>
  );
};

export default ToastContainer;
