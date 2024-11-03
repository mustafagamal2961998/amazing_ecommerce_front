'use client'

import Landing from "./Landing";
import Print from "./Print/Print";
import PrintType from "./PrintType";
import PrintSizesAndDirections from "./PrintSizesAndDirections";
import ModelType from "./ModelType";
import PrintColor from "./PrintColor";
import MaterialType from "./MaterialType";
import HomePageCart from "./HomePageCart";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <Landing />
      <Print />
      <PrintType />
      <PrintSizesAndDirections />
      <PrintColor />
      <MaterialType />
      <ModelType />
      <HomePageCart />
    </div>
  )
}

export default HomePage
