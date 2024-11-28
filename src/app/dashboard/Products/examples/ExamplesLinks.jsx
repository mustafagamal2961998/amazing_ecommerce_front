import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ExamplesLinks = () => {
    const pathname = usePathname();
  return (
    <div className="w-full flex justify-center flex-wrap items-center gap-6 p-2">
        <Link
            href={"/dashboard/products/examples"}
            className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${
            pathname === "/dashboard/products/examples"
                ? "bg-[#014E40] underline"
                : "bg-[#007762]"
            }`}
        >
            أمثلة
        </Link>
        <Link
            href={"/dashboard/products/examples/names"}
            className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${
            pathname === "/dashboard/products/examples/names"
                ? "bg-[#014E40] underline"
                : "bg-[#007762]"
            }`}
        >
            أسماء
        </Link>
        <Link
            href={"/dashboard/products/examples/logos"}
            className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${
            pathname === "/dashboard/products/examples/logos"
                ? "bg-[#014E40] underline"
                : "bg-[#007762]"
            }`}
        >
            شعار
        </Link>
        <Link
            href={"/dashboard/products/examples/images"}
            className={`w-max py-2 px-8 duration-200 cursor-pointer rounded-br-3xl rounded-tl-3xl hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl hover:underline text-white hover:bg-[#014E40] ${
            pathname === "/dashboard/products/examples/images"
                ? "bg-[#014E40] underline"
                : "bg-[#007762]"
            }`}
        >
            صورة
        </Link>
    </div>
  )
}

export default ExamplesLinks
