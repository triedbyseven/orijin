import App from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import { withRouter } from 'next/router';
import { Sidebar } from '../components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient, router } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        {console.log(router.pathname)}

        <div className="container-fluid">
          <div className="row">
            {router.pathname.includes('dashboard') ? <Sidebar /> : null}
            <Component {...pageProps} />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(withRouter(MyApp));
