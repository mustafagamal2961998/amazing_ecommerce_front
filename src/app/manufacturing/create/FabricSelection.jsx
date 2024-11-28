'use client'

import axios from "axios";
import { useState, useEffect } from "react"
import { GET_MATERIALS } from "../../../Utils/APIs";

const FabricSelection = () => {
    const [materialOne, setMaterialOne] = useState('material-1');
    const [materialOneColor, setMaterialOneColor] = useState('#000000');

    const [materialTwo, setMaterialTwo] = useState('material-1');
    const [materialTwoColor, setMaterialTwoColor] = useState('#000000');

    const [materialThree, setMaterialThree] = useState('material-1');
    const [materialThreeColor, setMaterialThreeColor] = useState('#000000');

    const [notes, setNotes] = useState('');

    const [materials, setMaterials] = useState([]);

    const fetchMaterials = async () => {
        try {
            const res = await axios.get(GET_MATERIALS);
            const data = res.data.data;
            setMaterials(data);

            setMaterialOne(data[0].name_ar);
            setMaterialTwo(data[1].name_ar);
            setMaterialThree(data[2].name_ar);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMaterials();
    }, [])

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('fabricSelection'));
        if (savedData) {
            setMaterialOne(savedData.materialOne);
            setMaterialOneColor(savedData.materialOneColor);
            setMaterialTwo(savedData.materialTwo);
            setMaterialTwoColor(savedData.materialTwoColor);
            setMaterialThree(savedData.materialThree);
            setMaterialThreeColor(savedData.materialThreeColor);
            setNotes(savedData.notes || '');
        }
    }, []);

    useEffect(() => {
        const fabricData = {
            materialOne,
            materialOneColor,
            materialTwo,
            materialTwoColor,
            materialThree,
            materialThreeColor,
            notes 
        };
        localStorage.setItem('fabricSelection', JSON.stringify(fabricData));
    }, [materialOne, materialOneColor, materialTwo, materialTwoColor, materialThree, materialThreeColor, notes]);

    return (
        <div className='w-full flex flex-col justify-start gap-6'>
            <span className='w-full flex max-md:flex-col justify-start items-center gap-4'>
                <p className='w-max font-bold text-lg'>الخامة رقم 1</p>
                <select
                    className='w-3/4 max-md:w-full mr-auto rounded-lg p-2 shadow-inner outline-none cursor-pointer'
                    value={materialOne}
                    onChange={(e) => setMaterialOne(e.target.value)}
                >
                    {
                        materials.map((material) => (
                            <option key={material.id} value={material.name_ar}>{material.name_ar}</option>
                        ))
                    }
                </select>
            </span>
            <span className='w-full max-md:flex-col flex justify-start items-center gap-4'>
                <p className='w-max font-bold text-lg'>الخامة رقم 2</p>
                <select
                    className='w-3/4 max-md:w-full mr-auto rounded-lg p-2 shadow-inner outline-none cursor-pointer'
                    value={materialTwo}
                    onChange={(e) => setMaterialTwo(e.target.value)}
                >
                    {
                        materials.map((material) => (
                            <option key={material.id} value={material.name_ar}>{material.name_ar}</option>
                        ))
                    }
                </select>
            </span>
            <span className='w-full flex max-md:flex-col justify-start items-center gap-4'>
                <p className='w-max font-bold text-lg'>الخامة رقم 3</p>
                <select
                    className='w-3/4 max-md:w-full mr-auto rounded-lg p-2 shadow-inner outline-none cursor-pointer'
                    value={materialThree}
                    onChange={(e) => setMaterialThree(e.target.value)}
                >
                    {
                        materials.map((material) => (
                            <option key={material.id} value={material.name_ar}>{material.name_ar}</option>
                        ))
                    }
                </select>
            </span>
            <span className='w-full flex max-md:justify-center max-md:gap-4 justify-start items-center gap-24'>
                <p className='w-max font-bold text-lg'>لون الخامة 1</p>
                <input 
                    type='color' 
                    value={materialOneColor} 
                    onChange={(e) => setMaterialOneColor(e.target.value)}
                    className='w-1/12 p-2 cursor-pointer'
                />
                <span className='w-10 h-10 rounded-full p-2'
                style={{ backgroundColor: materialOneColor }}
                ></span>
            </span>
            <span className='w-full flex max-md:justify-center max-md:gap-4 justify-start items-center gap-24'>
                <p className='w-max font-bold text-lg'>لون الخامة 2</p>
                <input 
                    type='color' 
                    value={materialTwoColor} 
                    onChange={(e) => setMaterialTwoColor(e.target.value)}
                    className='w-1/12 p-2 cursor-pointer'
                />
                <span className='w-10 h-10 rounded-full p-2'
                style={{ backgroundColor: materialTwoColor }}
                ></span>
            </span>
            <span className='w-full flex max-md:justify-center max-md:gap-4 justify-start items-center gap-24'>
                <p className='w-max font-bold text-lg'>لون الخامة 3</p>
                <input 
                    type='color' 
                    value={materialThreeColor} 
                    onChange={(e) => setMaterialThreeColor(e.target.value)}
                    className='w-1/12 p-2 cursor-pointer'
                />
                <span className='w-10 h-10 rounded-full p-2'
                style={{ backgroundColor: materialThreeColor }}
                ></span>
            </span>
            <span className='w-full flex flex-col items-start gap-3'>
                <p className='w-max font-bold text-lg'>ملاحظات</p>
                <textarea 
                    className='w-full h-24 p-2 rounded-lg shadow-inner outline-none md:placeholder:font-bold placeholder:text-center max-md:placeholder:text-sm'
                    placeholder='الرجاء كتابة الملاحظات الخاصة بنوع القماش والاكسسورات الخاصة بالموديل'
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                ></textarea>
            </span>
        </div>
    )
}

export default FabricSelection;
