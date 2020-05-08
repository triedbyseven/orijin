import { v4 as uuid } from 'uuid';

export const submitPrice = (updater: any, query: any, price: number) => {
  updater({
    variables: { price },
    optimisticResponse: {
      __type: 'Mutation',
      updatePrice: {
        __typename: 'Product',
        id: uuid(),
        price,
      },
    },
    update: (cache, { data: { updatePrice } }) => {
      const data: any = cache.readQuery({
        query,
      });

      cache.writeQuery({
        query,
        data: {
          ...data,
          getProduct: { ...data.getProduct, updatePrice },
        },
      });
    },
  });
};
