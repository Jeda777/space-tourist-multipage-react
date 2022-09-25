import React, { useState } from 'react'
import data from '../data.json'
import { Anousheh, Douglas, Mark, Victor } from '../assetsIndex'

const Crew = () => {
  const names = [data.crew[0].name, data.crew[1].name, data.crew[2].name, data.crew[3].name]
  const [activeName, setActiveName] = useState(names[0])

  return (
    <section id='crew'>

      <div className='max-w-[1440px] mx-auto w-full -mt-24 overflow-hidden text-center md:text-left flex flex-col items-center
      pt-32 sm:pt-36 md:pt-40  
      px-6
      pb-20 md:pb-0 min-h-screen gap-6'>

        <h5 className='uppercase w-full'><span className='opacity-25'>02&nbsp;</span> Meet your crew</h5>

        <div className='flex flex-col-reverse md:flex-col xl:flex-row items-center gap-10 text-center xl:text-left w-full 
        xl:justify-around'>

          <div className='flex flex-col items-center gap-4 md:gap-10 xl:gap-40 md:flex-col-reverse'>

            <div className='flex gap-2'>
              <button className=
              {`w-[10px] h-[10px] rounded-full bg-white ${activeName === names[0] ? '' : 'opacity-50'} hover:opacity-75 transition`}
                onClick={() => setActiveName(names[0])}></button>
              <button className=
              {`w-[10px] h-[10px] rounded-full bg-white ${activeName === names[1] ? '' : 'opacity-50'} hover:opacity-75 transition`}
                onClick={() => setActiveName(names[1])}></button>
              <button className=
              {`w-[10px] h-[10px] rounded-full bg-white ${activeName === names[2] ? '' : 'opacity-50'} hover:opacity-75 transition`}
                onClick={() => setActiveName(names[2])}></button>
              <button className=
              {`w-[10px] h-[10px] rounded-full bg-white ${activeName === names[3] ? '' : 'opacity-50'} hover:opacity-75 transition`}
                onClick={() => setActiveName(names[3])}></button>
            </div>
            {data.crew.map((i) => {
              return(
                <div key={i.name} className={`${i.name === activeName ? '' : 'hidden'} max-w-[500px]`}>
                  <h4 className='opacity-50 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl'>{i.role}</h4>
                  <h3 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-[72px] pb-3'>{i.name}</h3>
                  <p className='sm:text-lg lg:text-xl 2xl:text-2xl'>{i.bio}</p>
                </div>
              )
            })}
          </div>

          <div id='crew-img-container'>
            <img className='max-w-[180px] sm:max-w-[220px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px]'
            src={activeName === names[0] ? Douglas
              : activeName === names[1] ? Mark
              : activeName === names[2] ? Victor
              : activeName === names[3] ? Anousheh : ''
              } alt={
                activeName === names[0] ? 'Douglas'
              : activeName === names[1] ? 'Mark'
              : activeName === names[2] ? 'Victor'
              : activeName === names[3] ? 'Anousheh' : ''
              } />            
          </div>


        </div>

      </div>

    </section>
  )
}

export default Crew