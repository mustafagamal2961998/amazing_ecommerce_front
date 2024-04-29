'use client'
import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

export default function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  const handleMinPriceChange = (e) => {
    console.log(e.target.value)
  };
  const handleMaxPriceChange = (e) => {
    setMinValue(`SAR ${e.minValue}`);
    setMaxValue(`SAR ${e.maxValue}`);
  };

  return (
      <div
        className="multi-range-slider-container w-full !border-none"
        style={{ border: "solid 1px" }}
      >
        <MultiRangeSlider
          min={0}
          max={2000}
          canMinMaxValueSame={true}
          onInput={(e) => {
            setMinValue(`SAR ${e.minValue}`);
            setMaxValue(`SAR ${e.maxValue}`);
          }}
          onChange={(e) => {
            setMinValue2(`SAR ${e.minValue}`);
            setMaxValue2(`SAR ${e.maxValue}`);
          }}
          label={false}
          ruler={false}
          style={{ border: "none", boxShadow: "none", padding: "15px 10px"}}
          barLeftColor="#E4E4E4"
          barInnerColor="#5E6DA8"
          barRightColor="#E4E4E4"
          thumbLeftColor="#FFFFFF"
          thumbRightColor="#FFFFFF"
          step={50}
        />
        <input 
          type='text' 
          className='maxPrice' 
          value={maxValue} 
          onChange={handleMaxPriceChange}
        />
        <input 
          type='text' 
          className='minPrice'
          value={minValue} 
          onChange={handleMinPriceChange} 
        />
    </div>
  );
}
