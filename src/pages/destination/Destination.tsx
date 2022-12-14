import { Outlet, Navigate, useLocation } from 'react-router-dom'

const Destination = () => {
  const location = useLocation()

  return (
    <section id='destination'>
      {location.pathname === '/destination' ? <Navigate to='./moon' /> : null}

      <div
        className='max-w-[1440px] mx-auto w-full -mt-24 overflow-hidden text-center lg:text-left flex flex-col items-center 
      gap-8 md:gap-16 lg:gap-32 xl:gap-40
      pt-32 sm:pt-36 md:pt-40 
      px-6
      pb-20 min-h-screen'
      >
        <h5 className='uppercase w-full'>
          <span className='opacity-25'>01&nbsp;</span> Pick your destination
        </h5>

        <Outlet />
      </div>
    </section>
  )
}

export default Destination
