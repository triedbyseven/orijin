// import axios from 'axios';
import { useState, useEffect } from 'react';
import { QUERY_GLOBAL_CONFIG } from '../../graphql';
import { execute, makePromise } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const uri = 'http://localhost:3000/api/graphql';
const link = new HttpLink({ uri });

const operation = {
  query: QUERY_GLOBAL_CONFIG,
};

export default function () {
  const [config, updateConfig] = useState({
    data: {},
    loading: true,
  });

  async function myFunc() {
    try {
      const { data } = await makePromise(execute(link, operation));
      updateConfig({ data, loading: false });
    } catch (error) {
      console.log(`received error ${error}`);
    }
  }

  useEffect(() => {
    myFunc();
  }, []);

  return config;
}
