import axios from "axios";
import { GET_SECTIONS } from '../../../../Utils/APIs'
import Navbar from "../../../../components/Navbar/Navbar";
import Slider from './Slider';

const Section = async ({params}) => {
  const id = params.id;
  const res = await axios.get(GET_SECTIONS + id);
  const section = res.data.data;
  return (
    <div className='w-full flex flex-col gap-10'>
      <Navbar />
      <Slider section={section} />
    </div>
  )
}

export default Section
