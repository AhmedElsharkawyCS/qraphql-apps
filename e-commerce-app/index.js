const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    hello: String
  }
`
const resolvers = {
  Query: {
    hello: () => "hello!",
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 E-Commerce app server ready at ${url}`)
})
