"use client";
import React from "react";
import Image from "next/image";
import { productCardType } from "@types";
import Link from "next/link";
import CartButton from "./CartButton";

const ProductCard: React.FC<productCardType> = ({
    id,
    title,
    imageSrc,
    price,
}) => {
    return (
        <div className="text-center relative flex flex-col items-center">
            <Link
                href={`/products/product?product-id=${id}`}
                className="text-center relative flex flex-col items-center"
            >
                <div >
                    <Image
                        src={imageSrc}
                        width={180}
                        height={270}
                        alt={title}
                        className="rounded-xl"
                    />
                </div>
                <p className="text-black dark:text-white text-md font-bold mt-2 w-[150px] truncate max-sm:group-[.list]:w-[110px] max-sm:group-[.list]:text-sm">
                    {title}
                </p>
                <p className="text-primary text-sm mb-5 max-sm:group-[.list]:text-xs">{price} EGP</p>
            </Link>
            <CartButton productId={id} buttonStyles="bg-white dark:bg-black text-black dark:text-white max-sm:group-[.list]:text-xs" iconStyles="left-3 bg-dark-container p-1 rounded-full" />
        </div>
    );
};

export default ProductCard;
