import AllProducts from "@/components/shop/AllProducts";


const ShopCategory = ({products,title}) => {
  return (
    <>
      <AllProducts products={products} title={title} />
    </>
  )
}

export async function getServerSideProps(context) {
  const {category} = context.query;
  // Fetch products data from the API
  const productResponse = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const products = await productResponse.json(); 
  return {
    props: {
      products,
			title: category
    },
  };
}

export default ShopCategory;
