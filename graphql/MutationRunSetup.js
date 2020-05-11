import gql from 'graphql-tag';

export default gql`
    mutation runSetup($success: boolean) {
        runSetup(success: $success) {
            success
        }
    }
`;