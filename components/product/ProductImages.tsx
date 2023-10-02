import React from 'react'
import Image from "next/image";

const ProductImages = ({ images }: { images?: string[] }) => {
    return (
        <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
                {images?.map((image) => (
                    <Image
                        key={image}
                        src={image}
                        width={408}
                        height={612}
                        quality={100}
                        priority={true}
                        alt={image}
                        className="w-full max-lg:odd:last-of-type:col-span-2"
                    />
                ))}
            </div>
        </div>)
}

export default ProductImages