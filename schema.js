const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    products(filter: ProductsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Mutation {
    addCategory(category: AddCategory!): Category!
    addProduct(product: AddProduct!): Product!
    addReview(review: AddReview!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    name: String!
    id: ID!
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilter {
    name: String
    price: Float
    onSale: Boolean
    avaRating: Int
  }

  input AddCategory {
    name: String!
  }

  input AddProduct {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input AddReview {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`

module.exports = { typeDefs }
