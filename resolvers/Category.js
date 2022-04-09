const { calAverage } = require("./Query")

const Category = {
  products: (parent, { filter }, { database }) => {
    let products = database.products
    if (!filter) return products
    if (filter.onSale !== undefined) products = products.filter((item) => item.onSale === filter.onSale)
    if (filter.name) products = products.filter((item) => item.name.toLowerCase() === filter.name.toLowerCase())
    if (filter.price) products = products.filter((item) => parseInt(item.price) === parseInt(filter.price))
    if (filter.avaRating) products = calAverage(products, reviews, filter.avaRating)
    return products
  },
}

module.exports = { Category }
