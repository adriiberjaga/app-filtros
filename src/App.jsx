import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import Header from './components/Header'
function useFilters () {
  const [ filter, setFilter ] = useState({
    category: 'all',
    minPrice: 0,
  })
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (
          filter.category === 'all' ||
          product.category === filter.category
        )
      )
    })
  }
  return { filterProducts, setFilter}
}
function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilter } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilter} />
        <Products products={filteredProducts}  />
    </>
  )
}

export default App
