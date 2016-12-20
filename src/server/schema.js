import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull
} from "graphql";

const Posts = [
    {
        "id": 1,
        "url": "http://www.facebook.com",
        "title": "Facebook",
        "vote": 0
    },
    {
        "id": 2,
        "url": "http://www.google.fr",
        "title": "Google",
        "vote": 3
    },
    {
        "id": 3,
        "url": "http://www.lemonde.fr",
        "title": "Le Monde",
        "vote": 7
    }
];

let nextIndex = 4;

const PostType = new GraphQLObjectType({
    name: 'post',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            url: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            vote: {
                type: GraphQLInt
            }
        }
    }
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            posts: {
                type: new GraphQLList(PostType),
                resolve: () => {
                    return Posts;
                }
            }
        }
    }
});

const MutationAdd = {
    type: new GraphQLList(PostType),
    description: 'Add a Post',
    args: {
        url: {
            name: 'Post url',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, args) => {
        Posts.push({
            id: nextIndex,
            url: args.url,
            title: "todo",
            vote: 0
        });
        nextIndex++;
        return Posts;
    }
};

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        add: MutationAdd
    }
});

export default new GraphQLSchema({
    query: queryType,
    mutation: MutationType
});
