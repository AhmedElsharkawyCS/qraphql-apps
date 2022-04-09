const Product = {
  category: (parent, args, { database }) => database.categories.find((item) => item.id === parent.categoryId),
  reviews: (parent, args, { database }) => database.reviews.filter((item) => item.productId === parent.id),
}

module.exports = { Product }
