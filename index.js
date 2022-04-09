const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema")
const resolvers = require("./resolvers")
const data = require("./data")

const server = new ApolloServer({ typeDefs, resolvers, context: { database: data } })

server.listen().then(({ url }) => {
  console.log(`🚀 E-Commerce app server ready at ${url}`)
})
