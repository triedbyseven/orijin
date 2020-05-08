import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_GLOBAL_CONFIG } from '../graphql';

import { subtractCount } from '../utils/counter';
import { PayPalButton } from 'react-paypal-button-v2';

const HomePage = () => {
  // Memory & Network requests
  const router = useRouter();
  const [state, updateState] = useState({ price: null, shipping: null });
  const [height, updateHeight]: any = useState(0);
  const [count, updateCount]: any = useState(1);
  // const { loading, error, data } = useQuery(QUERY_GLOBAL_CONFIG, {
  //   onError: (error): any => {
  //     console.log(error);
  //     router.push('/setup');
  //   },
  //   onCompleted: (data): any => {
  //     const {
  //       getProduct: { price, shipping },
  //     } = data;
  //     updateState({ price, shipping });
  //   },
  // });

  useEffect(() => {
    updateHeight(window.innerHeight);
  });

  // if (loading && state.price === null) {
  //   return (
  //     <div className="d-flex justify-content-center align-items-center">
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //       <style jsx>{`
  //         .d-flex {
  //           height: ${height}px;
  //         }
  //       `}</style>
  //     </div>
  //   );
  // }

  // if (error) return '...network error.';

  // const { getProduct } = data;

  // if (!getProduct || !state.price || !state.shipping)
  //   return 'You need to setup your product information.';

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* <div className="col-sm order-2 order-md-1">
          <h1>Purell Santizer</h1>
          <p>
            Keep your loved ones clean. <br /> In stock and ready to ship.
          </p>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              Per Item: ${parseFloat(state.price).toFixed(2)}
            </li>
            <li className="list-group-item">Shipping: ${state.shipping}</li>
            <li className="list-group-item">
              Total: ${(count * state.price + 4.25).toFixed(2)}
            </li>
          </ul> */}
        {/* <PayPalButton
            style={{
              layout: 'horizontal',
              color: 'blue',
              shape: 'pill',
              label: 'pay',
              height: 50
            }}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: count * 7
                    }
                  }
                ]
                // application_context: {
                //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                // }
              });
            }}
            onSuccess={(details, data) => {
              alert(
                'Transaction completed by ' + details.payer.name.given_name
              );

              // OPTIONAL: Call your server to save the transaction
              return fetch('/paypal-transaction-complete', {
                method: 'post',
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
            }}
          /> */}
        {/* <div className="button_container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => alert('Clicked!')}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="col-sm order-1 order-md-2">
          <div className="image_container">
            <img src="purell-sanitizer-02.jpg" alt="purell-sanitizer" />
          </div>
          <div className="counter_container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => subtractCount(count, updateCount)}
            >
              -
            </button>
            <input
              value={count}
              type="number"
              disabled
              onChange={(event) => updateCount(parseInt(event.target.value))}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => updateCount(count + 1)}
            >
              +
            </button>
          </div>
        </div> */}
      </div>
      <style jsx>{`
        .container,
        .row {
          height: ${height}px;
        }
        h1 {
          font-size: 48px;
          font-weight: 500;
          text-align: center;
          line-height: 0.8;
        }
        p {
          font-size: 20px;
          font-weight: 400;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .button_container {
          text-align: center;
        }
        .button_container button {
          width: 322px;
          font-size: 24px;
          text-transform: uppercase;
          padding: 1rem 0.75rem;
          border-radius: 50px;
          background-color: #009cde;
          cursor: pointer !important;
        }

        .image_container {
          text-align: center;
        }

        .image_container img {
          max-width: 300px;
          width: 100%;
          margin-bottom: 0.5rem;
        }

        .counter_container {
          text-align: center;
          margin-bottom: 1rem;
        }

        .counter_container button {
          position: relative;
          z-index: 2;
          width: 38px;
          background-color: #009cde;
        }

        .counter_container input {
          font-size: 20px;
          text-align: center;
          padding: 0;
          border: none;
          background-color: #fff;
        }

        .list-group {
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 150px;
            text-align: left;
          }
          p {
            font-size: 34px;
            text-align: left;
            margin-bottom: 2rem;
          }
          .image_container img {
            max-width: 100%;
            margin-bottom: 2rem;
          }
          .counter_container {
            text-align: center;
            margin-bottom: 2rem;
          }
          .button_container {
            text-align: left;
          }
          .button_container button {
            font-size: 27px;
            padding: 1.7rem 0.75rem;
          }
          .list-group {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
