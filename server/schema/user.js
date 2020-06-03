import gql from 'graphql-tag';

export const user = gql`
    type User {
        id: ID
        username: String
        email: String
        password: String
    }

    type AuthPayLoad {
        token: String
        user: User
    }
`;