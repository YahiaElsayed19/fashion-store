import Hero from '@components/Hero'
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
