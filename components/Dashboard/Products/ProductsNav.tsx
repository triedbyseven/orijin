import React from 'react';
import { VerticalList } from '../../Ui/List';
import Link from 'next/link';

export interface ProductsNavProps {}

const ProductsNav: React.SFC<ProductsNavProps> = () => {
  return (
    <>
      <div className="col-12" style={{ minHeight: 89 }}>
        <div className="row">
          <div className="col">
            <h3 className="mb-0">Products</h3>
            <VerticalList>
              <li
                className="list-group-item border-0 pl-0"
                style={{ cursor: 'pointer' }}
                onClick={() => alert('Exporting data!')}
              >
                <span className="mr-1">
                  <svg
                    className="bi bi-arrow-bar-up"
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Export
              </li>
              <li
                className="list-group-item border-0"
                style={{ cursor: 'pointer' }}
                onClick={() => alert('Importing data!')}
              >
                <span className="mr-1">
                  <svg
                    className="bi bi-arrow-bar-up"
                    width="32px"
                    height="32px"
                    viewBox="0 0 16 12.5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(180deg)' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Import
              </li>
            </VerticalList>
          </div>
          <div className="col">
            <Link href="/dashboard/product">
              <a className="btn btn-outline-primary float-right">Add Product</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsNav;
