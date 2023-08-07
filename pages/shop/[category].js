import AllProducts from "@/components/shop/AllProducts";


const ShopCategory = ({products,title}) => {
  return (
    <>
      <AllProducts products={products} title={title} />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  const paths = products.map((prod) => ({
    params: {category:prod.category },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  // Fetch products data from the API
  const productResponse = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
  const products = await productResponse.json(); 
  return {
    props: {
      products,
			title: params.category
    },
  };
}

export default ShopCategory;
