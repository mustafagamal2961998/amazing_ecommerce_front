'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { GET_SECTIONS } from '../../../../Utils/APIs'

const Category = ({params}) => {
  const id = params.id;
  const [section, setSection] = useState(null);

  const getSection = async () => {
    const res = await axios.get(`${GET_SECTIONS}${id}`)
    setSection(res.data.data)
  }

  
  useEffect(() => {
    getSection();
  }, [])

  return (
    <div>
      {
      section && (
        <div key={section.id} className='flex items-center gap-3'>
          <h2>{section.description}</h2>
          {
            section.categories.map((cate, i) => (
              <div key={i} className='flex flex-col gap-2'>
                <h2>{cate.name}: </h2>
                <h2> {cate.description}</h2>
              </div>
            ))
          }
        </div>
      )
      }
    </div>
  )
}

export default Category
