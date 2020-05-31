import React, { useState } from 'react';
import Link from 'next/link';
import {
  FormGroup,
  InputText,
  InputPrice,
  InputNumber,
} from '../../components//Ui/Form';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION_ADD_PRODUCT, QUERY_PRODUCTS } from '../../graphql';
import { ButtonSecondary } from '../../components/Ui/Button';
import { Growing } from '../../components/Ui/Spinner';
import { v4 as uuid } from 'uuid';
import { withApollo } from 'react-apollo';

export interface ProductState {
  title: string;
  price: number;
  inventory: number;
}

export interface ProductProps { }

const Product: React.SFC<ProductProps> = (props) => {
  const [state, updateState]: any = useState<ProductState>({
    title: '',
    price: 0,
    inventory: 0,
  });

  const [
    addProduct,
    { loading: MutationLoading, error: MutationError },
  ] = useMutation(MUTATION_ADD_PRODUCT, {
    onError: (error) => {
      console.log(error);
    },
    onCompleted: () => alert('Mutation Completed!'),
  });

  const createProduct = () => {
    addProduct({
      variables: {
        title: state.title,
        price: state.price,
        inventory: state.inventory,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addProduct: {
          __typename: 'Product',
          id: uuid(),
          title: state.title,
          price: state.price,
          inventory: state.inventory,
        },
      },
      update: (cache: any, { data: { addProduct } }): any => {
        const data = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: {
            getProducts: [...data.getProducts, addProduct],
          },
        });
      },
    });
  };

  const onChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'number') {
      if (value < 0) return;

      return updateState((prevState) => ({
        ...prevState,
        [name]: parseFloat(value),
      }));
    }

    updateState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="col pt-5">
      <div className="container">
        <Link href="/dashboard/products">
          <div
            style={{
              cursor: 'pointer',
              marginBottom: '1rem',
            }}
          >
            <svg
              className="bi bi-arrow-left-short"
              width="25px"
              height="25px"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
            Products
          </div>
        </Link>
        <h3 className="mb-5 font-weight-bold">Add Product</h3>
        <div className="form-row">
          <InputText
            type="text"
            error={null}
            onChange={onChange}
            labelTitle="Title"
            name="title"
            placeholderTitle="Short sleeve t-shirt"
          />
        </div>
        <div className="form-row">
          <FormGroup>
            <InputPrice
              onChange={onChange}
              labelTitle="Price"
              value={state.price}
            />
          </FormGroup>
          <FormGroup>
            <InputNumber
              onChange={onChange}
              labelTitle="Inventory"
              name="inventory"
              value={state.inventory}
            />
          </FormGroup>
        </div>
        <ButtonSecondary mutationLoading={false} float="right" onClick={() => createProduct()}>
          <Growing visible={MutationLoading} />
          {MutationLoading ? ' Loading...' : 'Save'}
          {MutationError ? 'Network error occured.' : ''}
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default withApollo(Product);
