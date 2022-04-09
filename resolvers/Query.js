const calAverage = (products, reviews, avaRating) => {
  return products.filter((item) => {
    let sum = 0
    let number = 0
    reviews.forEach((review) => {
      if (review.productId === item.id) {
        sum += review.rating
        number++
      }
    })
    const average = sum / number
    return average >= avaRating
  })
}
const Query = {
  products: (parent, { filter }, { database }) => {
    let products = database.products
    let reviews = database.reviews
    if (!filter) return products
    if (filter.onSale !== undefined) products = products.filter((item) => item.onSale === filter.onSale)
    if (filter.name) products = products.filter((item) => item.name.toLowerCase() === filter.name.toLowerCase())
    if (filter.price) products = products.filter((item) => parseInt(item.price) === parseInt(filter.price))
    if (filter.avaRating) products = calAverage(products, reviews, filter.avaRating)
    return products
  },
  product: (parent, args, { database }) => database.products.find((item) => item.id === args.id),
  categories: (parent, args, { database }) => database.categories,
  category: (parent, args, { database }) => database.categories.find((item) => item.id === args.id),
}

module.exports = { Query, calAverage }
