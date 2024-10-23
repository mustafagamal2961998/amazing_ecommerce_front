import axios from "axios";
import { GET_CATEGORY, GET_PRODUCT } from "../../../../Utils/APIs";
import Navbar from "../../../../components/Navbar/Navbar";
import ProductData from './ProductData';
import ProductCard from "../../../../components/Products/ProductCard";
import arrow from '../../../../assets/arrow.png';
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id: productId } = params;
  const product = await axios.get(GET_PRODUCT + productId).then((res) => res.data.data);

  return {
    title: `${product.name}`,
    description: `${product.description}`,
    openGraph: {
      title: product.name,
      description: `${product.description}`,
      images: [product.colors[0].images[0].image_url],
    },
  };
}

const Product = async ({ params }) => {
  const productId = params.id;
  
  const res = await axios.get(GET_PRODUCT + productId);
  const product = res.data.data;
  
  const products = await axios
    .get(GET_CATEGORY + product.category_id)
    .then((data) => data.data.data.products);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-start gap-5 p-5 w-full pb-5 pt-5 pr-[60px] pl-[60px]">
        <span className="w-[95%] flex justify-between items-center mt-8 mb-8">
          <span className="flex items-center text-gray-300">
            {product.category_name} / 
            <p className="text-black mr-1">{product.name}</p>
          </span>
          <Link href="/" className="flex gap-2 items-center">
            رجوع
            <Image src={arrow} width={8} height={8} alt="back" className="w-[8px] h-[8px] mt-1" />
          </Link>
        </span>
        <ProductData product={product} />
        <div className="relative w-full pb-5 flex flex-col gap-5 items-start shadow-md rounded-2xl">
          <span className="flex justify-center items-center gap-2 w-[10%] max-md:w-2/4 max-md:text-center p-1 bg-[#00B6A9] text-white rounded-tr-2xl rounded-bl-2xl">
            تفاصيل المنتج
          </span>
          <span className="flex items-start gap-36 max-md:flex-col max-md:gap-3 mt-3 mr-16">
            {product.description}
          </span>
        </div>
        <div className="similar-products flex flex-col items-start gap-5 w-full">
          <h2 className="font-bold text-[24px]">منتجات اخرى</h2>
          <span className="grid grid-cols-5 max-md:grid-cols-2 gap-5 max-md:items-start">
            {products
              .filter((prod) => prod.id !== productId)
              .map((productData) => (
                <ProductCard
                  key={productData.id}
                  id={productData.id}
                  title={productData.name}
                  price={productData.sizes[0].basic_price}
                  discount_rate={productData.sizes[0].discount_rate}
                  thumbnail={productData.colors[0].images[0].url}
                />
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Product;
