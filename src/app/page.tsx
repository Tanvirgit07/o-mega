// import Header from "@/Components/Header/Header";

import Banner from "@/Components/Banner";
import ProductsList from "@/Components/ProductsList";
import { getData } from "@/helpers";

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await getData(endpoint);
  // console.log(products);
  return (
    <main>
      {/* <Header /> */}
      <Banner />
      <ProductsList products={products}/>
    </main>
  );
}
