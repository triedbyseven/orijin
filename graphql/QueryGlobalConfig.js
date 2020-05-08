import gql from 'graphql-tag';

export default gql`
  query {
    getGlobalConfig {
      businessName
      fullName
    }
  }
`;
