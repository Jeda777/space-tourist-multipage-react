import React, { useState } from 'react'
import data from '../data.json'
import { launchVechicleLandscape, launchVechiclePortrait, spaceportLandscape, spaceportPortrait, spaceCapsuleLandscape, spaceCapsulePortrait } from '../assetsIndex'

const Technology = () => {
  const [tab, setTab] = useState(1)

  return (
    <section id='technology'>

      <div className='max-w-[1440px] mx-auto w-full -mt-24 overflow-hidden text-center xl:text-left flex flex-col gap-8 xl:gap-20 2xl:gap-28
      pt-32 sm:pt-36 md:pt-40
      xl:px-6
      pb-20 min-h-screen'>

        <h5 className='uppercase w-full'><span className='opacity-25'>03&nbsp;</span> SPACE LAUNCH 101</h5>

        <div className='grid grid-cols-1 justify-items-center gap-8 xl:grid-cols-[1fr_6fr_5fr] xl:items-center'>

          <div className='text-white flex gap-4 justify-center order-2 xl:order-1 xl:flex-col'>
            <button className={`w-10 h-10 md:w-12 md:h-12 md:text-xl lg:w-14 lg:h-14 lg:text-2xl xl:w-20 xl:h-20 xl:text-3xl rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100 
            transition-all ${tab === 1 ? 'tab-active' : ''}`} onClick={() => setTab(1)}>1</button>
            <button className={`w-10 h-10 md:w-12 md:h-12 md:text-xl lg:w-14 lg:h-14 lg:text-2xl xl:w-20 xl:h-20 xl:text-3xl rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100 
            transition-all ${tab === 2 ? 'tab-active' : ''}`} onClick={() => setTab(2)}>2</button>
            <button className={`w-10 h-10 md:w-12 md:h-12 md:text-xl lg:w-14 lg:h-14 lg:text-2xl xl:w-20 xl:h-20 xl:text-3xl rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100 
            transition-all ${tab === 3 ? 'tab-active' : ''}`} onClick={() => setTab(3)}>3</button>
          </div>

          {data.technology.map((i, index) => {
            return(
              <div key={i.name} className={`${(index + 1) === tab ? '' : 'hidden'} max-w-[500px] flex flex-col px-6 xl:px-0 order-3 xl:order-2`}>
                <h4 className='text-secondary text-base sm:text-lg lg:text-2xl 2xl:text-3xl'>THE TERMINOLOGY…</h4>
                    <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[72px] pb-3 xl:mb-4'>{i.name}</h3>
                    <p className='sm:text-lg lg:text-xl 2xl:text-2xl'>{i.description}</p>
              </div>              
            )
          })}

          <img 
          src={tab === 1 ? launchVechicleLandscape : tab === 2 ? spaceportLandscape : tab === 3 ? spaceCapsuleLandscape : ''} 
          alt={tab === 1 ? 'Launch Vechicle' : tab === 2 ? 'Spaceport' : tab === 3 ? 'Space Capsule' : ''}
          className='xl:hidden order-1' />

<img 
          src={tab === 1 ? launchVechiclePortrait : tab === 2 ? spaceportPortrait : tab === 3 ? spaceCapsulePortrait : ''} 
          alt={tab === 1 ? 'Launch Vechicle' : tab === 2 ? 'Spaceport' : tab === 3 ? 'Space Capsule' : ''}
          className='hidden xl:inline-block order-3' />

        </div>

      </div>

    </section>
  )
}

export default Technology