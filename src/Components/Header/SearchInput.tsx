"use client";
import { getData } from "@/helpers";
import React, { useEffect, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { ProductType } from "../../../type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

function SearchInput() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const endpoint = "https://dummyjson.com/products";
      try {
        const data = await getData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products?.filter((item: ProductType) =>
      item?.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProduct(filtered);
    // console.log(filtered);
  }, [products, search]);
  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search products here..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full h-full border-2 border-blue-500 px-4  outline-none"
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
      <span className="w-10 h-10 bg-blue-500 inline-flex items-center justify-center text-white absolute top-0 right-0 cursor-pointer hover:bg-blue-600 duration-200">
        <RiSearchLine />
      </span>

      {search && (
        <div>
          {filteredProducts.length > 0 ? (
            <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
              {filteredProducts.map((item: ProductType) => (
                <Link
                  onClick={() => setSearch("")}
                  key={item?.id}
                  href={{
                    pathname: `/products/${item?.id}`,
                    query: { id: item?.id },
                  }}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-gray-200 px-3 py-1.5"
                >
                  {" "}
                  <CiSearch className="text-lg" /> {item?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
              <p className="text-base text-center">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                  {search}
                </span> 
                please try again
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
