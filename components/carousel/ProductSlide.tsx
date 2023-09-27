//@ts-ignore
import { SplideSlide } from '@splidejs/react-splide'
import ProductCard from '@components/ProductCard';
import { productCardType } from "@types";

const ProductSlide: React.FC<productCardType> = ({
    id,
    title,
    imageSrc,
    price,
}) => {
    return (
        <SplideSlide>
            <ProductCard id={id} title={title} imageSrc={imageSrc} price={price} />
        </SplideSlide>
    )
}

export default ProductSlide