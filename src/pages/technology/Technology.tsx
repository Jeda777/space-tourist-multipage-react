import { Outlet, Navigate, useLocation } from 'react-router-dom'

const Technology = () => {
  const location = useLocation()

  return (
    <section id='technology'>
      {location.pathname === '/technology' ? <Navigate to='./launch-vehicle' /> : null}

      <div
        className='max-w-[1440px] mx-auto w-full -mt-24 overflow-hidden text-center xl:text-left flex flex-col gap-8 xl:gap-20 2xl:gap-28
      pt-32 sm:pt-36 md:pt-40
      xl:px-6
      pb-20 min-h-screen'
      >
        <h5 className='uppercase w-full'>
          <span className='opacity-25'>03&nbsp;</span> SPACE LAUNCH 101
        </h5>

        <Outlet />
      </div>
    </section>
  )
}

export default Technology
