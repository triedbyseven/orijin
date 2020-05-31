import gql from 'graphql-tag';

export default gql`
    mutation runSetup($success: Boolean $businessName: String $fullName: String $username: String $email: String $password: String) {
        runSetup(success: $success businessName: $businessName fullName: $fullName username: $username email: $email password: $password) {
            success
        }
    }
`;