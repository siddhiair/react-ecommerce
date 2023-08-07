import AllProducts from "@/components/shop/AllProducts";


const Shop = ({products, title}) => {
  return (
    <>
      <AllProducts products={products} title={title} />
    </>
  )
}

export async function getStaticProps() {
  // Fetch products data from the API
  const productResponse = await fetch("https://fakestoreapi.com/products");
  const products = await productResponse.json(); 
  return {
    props: {
      products,
      title: 'All Products'
    },
  };
}

export default Shop;
