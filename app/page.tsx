import Hero from '@components/Hero'
import ProductsList from '@components/product/ProductsList'
import ProductsCarousels from '@components/carousel/ProductsCarousels'
import AllProducts from '@components/product/AllProducts'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsCarousels />
      <AllProducts />
    </>
  )
}
