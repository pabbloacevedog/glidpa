// src/graphql/mutations.js
import { gql } from '@apollo/client/core';

export const CREATE_CUSTOMER_MUTATION = gql`
    mutation customerSignup($email: String!, $user: String!, $password: String!,$plan_id: Int!) {
        customerSignup(email: $email, user: $user, password: $password, plan_id: $plan_id) {
            token
        }
    }
`;

export const CUSTOMER_LOGIN_MUTATION = gql`
    mutation customerLogin($email: String!, $password: String!) {
        customerLogin(email: $email, password: $password) {
            token
        }
    }
`;

export const LOGIN_MUTATION_GOOGLE = gql`
    mutation customerLoginGoogle($token: String!) {
        customerLoginGoogle(token: $token) {
            token
        }
    }
`;
