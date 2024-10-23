import axios from "axios";
import Navbar from "../../../../components/Navbar/Navbar";
import Products from './../../../../components/Products/Products';
import { GET_CATEGORY, GET_SECTIONS } from "../../../../Utils/APIs";

const Category = async ({params}) => {

  const res = await axios.get(GET_CATEGORY + params.id);

  const category = res.data.data;
  const section = await axios.get(GET_SECTIONS + category.section_id);
  const sectionName = section.data.data.name;

  return (
    <div className='w-full flex flex-col gap-4'>
      <Navbar />
      <Products section={sectionName} category={category.name} products={category.products} />
    </div>
  )
}

export default Category
