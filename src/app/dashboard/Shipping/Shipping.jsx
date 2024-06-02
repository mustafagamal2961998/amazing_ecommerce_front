import DashboardHeader from '../dashboardHeader/dashboardHeader'

const Shipping = () => {
  return (
    <main className='pr-[60px] flex flex-col justify-start items-center gap-10 w-4/5'>
        <DashboardHeader />
        <div className='w-full flex flex-col items-start gap-5'>
            <h2 className='text-lg'>شركات الشحن</h2>
        </div>
    </main>
  )
}

export default Shipping
