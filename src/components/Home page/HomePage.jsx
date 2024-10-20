'use client'

import Landing from "./Landing";
import Print from "./Print";
import PrintType from "./PrintType";
import PrintSizes from "./PrintSizes";
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
      <PrintSizes />
      <ModelType />
      <PrintColor />
      <MaterialType />
      <HomePageCart />
    </div>
  )
}

export default HomePage
