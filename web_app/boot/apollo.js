import { ApolloClient, InMemoryCache, split } from '@apollo/client/core';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// HTTP link para consultas y mutaciones
const httpLink = createUploadLink({
    uri: 'http://localhost:4000/graphql', // Reemplaza con tu URI de GraphQL
});

// WebSocket link para suscripciones
const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql', // Reemplaza con tu WebSocket URI
    options: {
        reconnect: true,
    },
});

// Usar split para dirigir las solicitudes al link correcto
const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);
const authLink = ST((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});
// Create the apollo client
const apolloClient = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default ({ app }) => {
    app.config.globalProperties.$apollo = apolloClient;
};

