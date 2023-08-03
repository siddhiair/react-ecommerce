import HomeBanner from "@/components/home/HomeBanner";
import HomeProducts from "@/components/home/HomeProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCategories from "@/components/home/HomeCategories";

const Home = ({products,categories}) => {
  return (
    <>
      <HomeBanner />
      <HomeCategories categories={categories} />
      <HomeProducts products={products} />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch products data from the API
  const productResponse = await fetch("https://fakestoreapi.com/products?limit=6&sort=asc");
  const products = await productResponse.json();

  const catResponse = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await catResponse.json();
  return {
    props: {
      products,
      categories
    },
  };
}

export default Home;
