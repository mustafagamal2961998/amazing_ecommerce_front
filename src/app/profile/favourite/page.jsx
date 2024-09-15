'use client'
import Navbar from '../../../components/Navbar/Navbar'
import ProfileSidebar from '../ProfileSidebar'
import { useStatusContext } from '../../../Utils/Status/statusContext'
import { GET_PRODUCTS } from "../../../Utils/Products/GetProducts/GET_PRODUCTS"
import { useEffect, useState } from 'react'
import img1 from '../../../assets/products/pro5.svg'
import ProductCard from "../../../components/Products/ProductCard"

const Favourite = () => {

    const { sidebar } = useStatusContext();
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const products = await GET_PRODUCTS();
        setProducts(products['products'].slice(5, 9));
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])

  return (
    <div className='min-h-screen'>
        <Navbar />
        <div className='relative flex gap-20 md:pl-[60px]'>
            <ProfileSidebar />
            <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
                <section className={`fav-products w-full flex flex-col items-start gap-5 p-10 favourite-products`}>
                    <h2 className='text-2xl font-bold'>المفضلة</h2>
                    <span className='grid grid-cols-4 max-md:grid-cols-2 max-md:items-start gap-3'>
                        {
                        products.map((product) => (
                            <ProductCard id={product.id} title={product.title} thumbnail={img1} price={product.price} />
                        ))
                        }
                    </span>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Favourite
