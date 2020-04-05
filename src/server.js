import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/typeDefs'

const server = new GraphQLServer({
    resolvers,
    typeDefs
})

module.exports = server