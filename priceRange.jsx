'use client'

import { useState, useEffect } from "react";
import './style.css'
// import { useState } from "react";
// import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

// export default function App() {
//   const [minValue, setMinValue] = useState(0);
//   const [maxValue, setMaxValue] = useState(0);
//   const [minValue2, setMinValue2] = useState(0);
//   const [maxValue2, setMaxValue2] = useState(0);
//   const handleMinPriceChange = (e) => {
//     console.log(e.target.value)
//   };
//   const handleMaxPriceChange = (e) => {
//     setMinValue(`SAR ${e.minValue}`);
//     setMaxValue(`SAR ${e.maxValue}`);
//   };

//   return (
//       <div dir=""
//         className="multi-range-slider-container w-full !border-none"
//         style={{ border: "solid 1px" }}
//       >
//         <MultiRangeSlider
//           min={0}
//           max={2000}
//           canMinMaxValueSame={false}
//           onInput={(e) => {
//             // Set min value to max value and vice versa
//             setMinValue(`SAR ${e.minValue}`);
//             setMaxValue(`SAR ${e.maxValue}`);
//           }}
//           onChange={(e) => {
//             // Set min value to max value and vice versa
//             setMinValue2(`SAR ${e.minValue}`);
//             setMaxValue2(`SAR ${e.maxValue}`);
//           }}
//           label={false}
//           ruler={false}
//           style={{ border: "none", boxShadow: "none", padding: "15px 10px"}}
//           barLeftColor="#E4E4E4"
//           barInnerColor="#5E6DA8"
//           barRightColor="#E4E4E4"
//           thumbLeftColor="#FFFFFF"
//           thumbRightColor="#FFFFFF"
//           step={50}
//         />
//         <input 
//           type='text' 
//           className='maxPrice' 
//           value={minValue} 
//           onChange={handleMaxPriceChange}
//         />
//         <input 
//           type='text' 
//           className='minPrice'
//           value={maxValue} 
//           onChange={handleMinPriceChange} 
//         />
//     </div>
//   );
// }

// const PriceRange = () => {
//   useEffect(() => {
//     const rangeInput = document.querySelectorAll(".range-input input");
//     const priceInput = document.querySelectorAll(".price-input input");
//     const range = document.querySelector(".slider .progress");
//     let priceGap = 1000;

//     const handlePriceInputChange = (e) => {
//       let minPrice = parseInt(priceInput[0].value);
//       let maxPrice = parseInt(priceInput[1].value);

//       if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
//         if (e.target.className === "input-min") {
//           rangeInput[0].value = minPrice;
//           range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//         } else {
//           rangeInput[1].value = maxPrice;
//           range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//         }
//       }
//     };

//     const handleRangeInputChange = (e) => {
//       let minVal = parseInt(rangeInput[0].value);
//       let maxVal = parseInt(rangeInput[1].value);

//       if (maxVal - minVal < priceGap) {
//         if (e.target.className === "range-min") {
//           rangeInput[0].value = maxVal - priceGap;
//         } else {
//           rangeInput[1].value = minVal + priceGap;
//         }
//       } else {
//         priceInput[0].value = minVal;
//         priceInput[1].value = maxVal;
//         range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//         range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//       }
//     };

//     priceInput.forEach((input) => {
//       input.addEventListener("input", handlePriceInputChange);
//     });

//     rangeInput.forEach((input) => {
//       input.addEventListener("input", handleRangeInputChange);
//     });

//     return () => {
//       priceInput.forEach((input) => {
//         input.removeEventListener("input", handlePriceInputChange);
//       });
//       rangeInput.forEach((input) => {
//         input.removeEventListener("input", handleRangeInputChange);
//       });
//     };
//   }, []);

//   return (
//     <div className="wrapper" dir="">
//       <div className="price-input">
//         <div className="field">
//           <input type="number" className="input-min" value="2500" />
//         </div>
//         <div className="field">
//           <input type="number" className="input-max" value="7500" />
//         </div>
//       </div>
//       <div className="slider">
//         <div className="progress"></div>
//       </div>
//       <div className="range-input" dir="">
//         <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" />
//         <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" />
//       </div>
//     </div>
//   );
// };

// export default PriceRange;

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(2000)

  const handleMinProgress = (value) => {
    setMinPrice(value)
    const minPriceProgress = document.getElementById('minPriceProgress');
    const widthValue = (value * 100) / 2000;
    minPriceProgress.style.width = `${widthValue}%`;
    if(value > maxPrice) {
      if(+value + +200 >= 2000){
        setMaxPrice(2000)
        return;
      }
      setMaxPrice(+value + +200)
    }
  }
  
  const handleMaxProgress = (value) => {
    setMaxPrice(value)
    const maxPriceProgress = document.getElementById('maxPriceProgress');
    const widthValue = (value * 100) / 2000;
    maxPriceProgress.style.width = `${widthValue}%`;
    if(value < minPrice) {
      if(+value - +200 <= 0){
        setMinPrice(0)
        return;
      }
      setMinPrice(+value - +200)
    }
  }

  useEffect(() => {
    handleMinProgress(minPrice)
    handleMaxProgress(maxPrice);
  }, [minPrice, maxPrice])

  return(
    <div className='p-5 flex flex-col justify-center items-center gap-3 overflow-hidden w-full'>
      <div className='relative flex justify-between items-center gap-4 w-full'>
        <input type='text' value={minPrice} onChange={(e) => {handleMinProgress(e.target.value); handleMaxProgress(maxPrice);}} className='min bg-[#d9d9d9] text-right text-black font-bold text-xs rounded-md border-none outline-none w-[70px] h-[15px]' />
        <input type='text' value={maxPrice} onChange={(e) => {handleMaxProgress(e.target.value); handleMinProgress(minPrice);}} className='min bg-[#D9D9D9] text-right text-black font-bold text-xs rounded-md border-none outline-none w-[70px] h-[15px]' />
        <span className='duration-75 absolute top-2/4 left-3 -translate-x-2/4 -translate-y-2/4 text-xs font-bold'>SAR</span>
        <span className='duration-75 absolute top-2/4 right-9 -translate-x-2/4 -translate-y-2/4 text-xs font-bold'>SAR</span>
      </div>
      <span className='duration-75 relative w-full h-[15px] bg-[#E4E4E4] rounded-xl'>
        <span id='minPriceProgress' className='duration-75 absolute right-0 bg-[#E4E4E4] z-10 rounded-xl h-[15px]'></span>
        <span id='maxPriceProgress' className='duration-75 absolute right-0 bg-[#5E6DA8] w-full rounded-xl h-[15px]'></span>
        <input type='range' step={50} min={0} max={2000} value={minPrice} onChange={(e) => handleMinProgress(e.target.value)} className='duration-75 absolute left-0 top-0 z-10 outline-none bg-transparent w-full' />
        <input type='range' step={50} min={0} max={2000} value={maxPrice} onChange={(e) => handleMaxProgress(e.target.value)} className='duration-75 absolute left-0 top-0 outline-none bg-transparent w-full' />
      </span>
    </div>
  );
}

export default PriceRange;