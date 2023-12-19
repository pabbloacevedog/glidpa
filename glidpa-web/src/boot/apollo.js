import { ApolloClient, InMemoryCache, split, ApolloLink } from '@apollo/client/core';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from '@apollo/client/utilities';
// import VueApollo from 'vue-apollo'
import fetch from 'node-fetch'
import { createUploadLink } from 'apollo-upload-client'
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";


const httpLink = createUploadLink({ uri: process.env.API_URL, fetch: fetch })
const wsLink = new GraphQLWsLink(
    createClient({
        url: process.env.API_WS_URL,
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
console.log(process.env.NODE_ENV)
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


// const apollo = new VueApollo({
//     defaultClient: apolloClient,
//     errorHandler({ graphQLErrors, networkError }) {
//         if (graphQLErrors) {
//             graphQLErrors.map(({ message, locations, path }) =>
//                 console.log(
//                     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//                 )
//             )
//         }
//         if (networkError) {
//             console.log(`[Network error]: ${networkError}`)
//         }
//     }
// })

// window.__APOLLO_CLIENT__ = apollo
export default ({ app, Vue, store }) => {
    // Vue.use(apollo)
    // app.apolloProvider = apollo
    // store.$apollo = apollo
    // Vue.prototype.$apollo = apollo
    Vue.use(apolloClient)
    app.apolloProvider = apolloClient
    store.$apollo = apolloClient
    Vue.prototype.$apollo = apolloClient
    app.config.globalProperties.$apollo = apolloClient;
}
