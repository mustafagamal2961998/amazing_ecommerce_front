import Link from 'next/link';
import { usePathname } from 'next/navigation'

const ProductsLinks = () => {
    const pathname = usePathname();
  return (
    <div className='w-full flex flex-wrap items-center gap-6 p-2'>
        <Link
        href={'/dashboard/products'}
        className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${pathname === '/dashboard/products' ? 'bg-[#014E40] underline' : 'bg-[#007762]'}`}
        >
        جميع المنتجات
        </Link>
        <Link
        href={'/dashboard/products/examples'}
        className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${pathname === '/dashboard/products/examples' ? 'bg-[#014E40] underline' : 'bg-[#007762]'}`}
        >
        صمم عبارتك
        </Link>
        <Link
        href={'/dashboard/products/printType'}
        className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${pathname === '/dashboard/products/printType' ? 'bg-[#014E40] underline' : 'bg-[#007762]'}`}
        >
        نوع الطباعة
        </Link>
        <Link
        href={'/dashboard/products/printSizes'}
        className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${pathname === '/dashboard/products/printSizes' ? 'bg-[#014E40] underline' : 'bg-[#007762]'}`}
        >
        مقاسات الطباعة
        </Link>
        <Link
        href={'/dashboard/products/modelType'}
        className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${pathname === '/dashboard/products/modelType' ? 'bg-[#014E40] underline' : 'bg-[#007762]'}`}
        >
        نوع الموديل
        </Link>
        <Link
        href={'/dashboard/products/materialType'}
        className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${pathname === '/dashboard/products/materialType' ? 'bg-[#014E40] underline' : 'bg-[#007762]'}`}
        >
        نوع الخامة
        </Link>
    </div>
  )
}

export default ProductsLinks
