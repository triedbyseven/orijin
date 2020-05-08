import { v4 as uuid } from 'uuid';

export const addNotification = (
  title: string,
  text: string,
  type: string,
  data: any,
  updater: any
) => {
  const response = data;
  const notification = [...response, { id: uuid(), title, text, type }];

  updater(notification);
};
