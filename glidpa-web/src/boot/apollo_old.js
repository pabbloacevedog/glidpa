import { boot } from 'quasar/wrappers'
import { ApolloClient, InMemoryCache, split, ApolloLink } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client'
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

console.log('VITE_GRAPHQL_URL',import.meta.env.VITE_GRAPHQL_URL)
console.log('VITE_GRAPHQL_WS',import.meta.env.VITE_GRAPHQL_WS )
const httpLink = createUploadLink({ uri: import.meta.env.VITE_GRAPHQL_URL })
const wsLink = new GraphQLWsLink(
    createClient({
        url: import.meta.env.VITE_GRAPHQL_WS,
        options: {
            reconnect: true,
        },
    }),
);
// cached storage for the user token
let token = localStorage.getItem('token')
const withToken = setContext(() => {
    // if you have a cached value, return it immediately
    if (token) {
        return { token };
    }

    return AsyncTokenLookup().then(userToken => {
        token = userToken;
        return { token };
    });
});

const resetToken = onError(({ networkError }) => {
    if (
        networkError &&
        networkError.name === 'ServerError' &&
        networkError.statusCode === 401
    ) {
        // remove cached token on 401 from the server
        token = null;
    }
});

const authFlowLink = withToken.concat(resetToken);
export const terminatingLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

// const link = ApolloLink.from([terminatingLink]);
console.log(import.meta.env.VITE_NODE_ENV)
const apolloClient = new ApolloClient({
    // link,
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            }
            if (networkError) {
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        authFlowLink,
        terminatingLink
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true
})
export default boot(({ app }) => {
    app.provide(DefaultApolloClient, apolloClient);
    app.config.globalProperties.$apollo = apolloClient;
})
