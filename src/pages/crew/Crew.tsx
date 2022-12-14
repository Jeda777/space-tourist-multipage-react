import { Outlet, Navigate, useLocation } from 'react-router-dom'

const Crew = () => {
  const location = useLocation()

  return (
    <section id='crew'>
      {location.pathname === '/crew' ? <Navigate to='./commander' /> : null}

      <div
        className='max-w-[1440px] mx-auto w-full -mt-24 overflow-hidden text-center md:text-left flex flex-col items-center
      pt-32 sm:pt-36 md:pt-40  
      px-6
      pb-20 md:pb-0 min-h-screen gap-6'
      >
        <h5 className='uppercase w-full'>
          <span className='opacity-25'>02&nbsp;</span> Meet your crew
        </h5>

        <Outlet />
      </div>
    </section>
  )
}

export default Crew
