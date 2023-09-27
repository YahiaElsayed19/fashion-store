import Hero from '@components/Hero'
import ProductsList from '@components/ProductsList'
import ProductsCarousels from '@components/carousel/ProductsCarousels'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsCarousels />
      <ProductsList />
    </>
  )
}
