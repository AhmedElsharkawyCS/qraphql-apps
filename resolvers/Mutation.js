const uuid = require("uuid")
const Mutation = {
  addCategory: (parent, { category }, { database }) => {
    const newCategory = {
      id: uuid.v4(),
      name: category.name,
    }
    database.categories.push(newCategory)
    return newCategory
  },

  addProduct: (parent, { product }, { database }) => {
    const newProduct = {
      ...product,
      id: uuid.v4(),
    }
    database.products.push(newProduct)
    return newProduct
  },
  addReview: (parent, { review }, { database }) => {
    const newReview = {
      ...review,
      id: uuid.v4(),
    }
    database.reviews.push(newReview)
    return newReview
  },
  deleteCategory: (parent, { id }, { database }) => {
    database.categories = database.categories.filter((cate) => cate.id !== id)
    database.products = database.products.filter((item) => {
      if (id === item.categoryId) {
        database.reviews = database.reviews.filter((rev) => rev.productId !== item.id)
        return false
      }
      return true
    })
    return true
  },
  deleteProduct: (parent, { id }, { database }) => {
    database.products = database.products.filter((pro) => pro.id !== id)
    database.reviews = database.reviews.filter((rev) => rev.productId !== id)
    return true
  },
  deleteReview: (parent, { id }, { database }) => {
    database.reviews = database.reviews.filter((rev) => rev.productId !== id)
    return true
  },
}

module.exports = { Mutation }
