"use client";
import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { getWishlist, removeWishlist } from "@util/api";
import ProductsList from "@components/product/ProductsList";
import { productType } from "@types";
import { FaTrash } from "react-icons/fa";
const page = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const session = await getSession();
      try {
        //@ts-ignore
        const { data } = await getWishlist(session?.user.id);
        setProducts(data);
      } catch (error) { }
      setLoading(false);
    })();
  }, []);
  const emptyWishlistHandler = async () => {
    //@ts-ignore
    await removeWishlist(session?.user.id);
    setProducts([]);
  };
  return (
    <section className="page">
      <ProductsList products={products} title="Wishlist" loading={loading} placeholderCount={5}/>
      {products.length > 0 && (
        <button
          aria-label="delete wishlist"
          type="button"
          className="flex justify-center gap-2 items-center py-2 px-3 text-white bg-red-600 font-medium text-sm rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={emptyWishlistHandler}
          disabled={products.length === 0}
        >
          Clear
          <FaTrash className="text-white w-4 h-3" />
        </button>
      )}
    </section>
  );
};

export default page;
