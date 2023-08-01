import AllProducts from "@/components/shop/AllProducts";


const Shop = ({products}) => {
  return (
    <>
      <AllProducts products={products} />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch products data from the API
  const productResponse = await fetch("https://fakestoreapi.com/products");
  const products = await productResponse.json(); 
  return {
    props: {
      products
    },
  };
}

export default Shop;
