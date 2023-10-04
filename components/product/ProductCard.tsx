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
        <div className="text-center relative flex flex-col items-center group-[.list]:w-full sm:group-[.list]:w-auto">
            <Link
                href={`/products/product?product-id=${id}`}
                className="text-center relative flex flex-col items-center"
            >
                <div className="group-[.list]:w-full sm:group-[.list]:w-auto relative">
                    <Image
                        src={imageSrc}
                        width={180}
                        height={270}
                        alt={title}
                        className="rounded-xl group-[.list]:w-full sm:group-[.list]:w-[180px]"
                    />
                </div>
                <p className="text-black dark:text-white text-md font-bold mt-2 w-[150px] truncate">
                    {title}
                </p>
                <p className="text-primary text-sm mb-5">{price} EGP</p>
            </Link>
            <CartButton productId={id} buttonStyles="bg-white dark:bg-black text-black dark:text-white" iconStyles="left-3 bg-dark-container p-1 rounded-full"/>
        </div>
    );
};

export default ProductCard;
