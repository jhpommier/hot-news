import React from "react";
import {render} from "react-dom";
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PostList from './components/PostList';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' }),
});

const QueryPosts = gql`query {posts {id, title, vote}}`;

const PostListWithData = graphql(QueryPosts, {
    props: ({data: { loading, posts }}) => ({
        loading,
        posts,
    })
})(PostList);

render(
    <ApolloProvider client={client}>
        <PostListWithData />
    </ApolloProvider>,
    document.getElementById('app')
);
