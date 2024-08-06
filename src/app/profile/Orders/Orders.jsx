import { useStatusContext } from '../../../Utils/Status/statusContext'
import HomePage from '../../../components/Home page/HomePage'

const Orders = () => {

    const { sidebar } = useStatusContext();

  return (
    <div className={`w-full  ${sidebar ? 'max-md:hidden' : ''} max-md:p-5`}>
        <section className={`w-full mt-[100px] pb-[60px] flex flex-col gap-5`}>
            <h2 className='text-2xl max-md:text-base font-bold'>خزانتي</h2>
            <HomePage />
        </section>
    </div>
  )
}

export default Orders
