import React, { useState } from 'react'
import { Europa, Mars, Moon, Titan } from '../assetsIndex'
import data from '../data.json'

const Destination = () => {
  const [planet, setPlanet] = useState('Moon')

  return (
    <section id='destination'>

      <div className='max-w-[1440px] mx-auto w-full -mt-24 overflow-hidden text-center lg:text-left flex flex-col items-center 
      gap-8 md:gap-16 lg:gap-32 xl:gap-40
      pt-32 sm:pt-36 md:pt-40 
      px-6
      pb-20 min-h-screen'>

          <h5 className='uppercase w-full'><span className='opacity-25'>01&nbsp;</span> Pick your destination</h5>

          <div className='flex flex-col w-full gap-6 items-center lg:grid lg:grid-cols-2 lg:px-24'>
            
            <img className='max-w-[170px] lg:max-w-[445px] w-full' src={
              planet === 'Europa' ? Europa 
            : planet === 'Mars' ? Mars 
            : planet === 'Moon' ? Moon 
            : planet === 'Titan' ? Titan 
            : ''}
             alt={planet} />

              <div className='flex flex-col gap-5'>
                <div id='planet-btns' className='flex justify-center lg:justify-start gap-6 uppercase text-white text-lg sm:text-xl md:text-2xl xl:text-3xl'>
                  <button className={`after:w-[34px] ${planet === 'Moon' ? 'active-planet' : ''}`}
                  onClick={() => setPlanet('Moon')}>Moon</button>
                  <button className={`after:w-[31px] ${planet === 'Mars' ? 'active-planet' : ''}`} 
                  onClick={() => setPlanet('Mars')}>Mars</button>
                  <button className={`after:w-[46px] ${planet === 'Europa' ? 'active-planet' : ''}`} 
                  onClick={() => setPlanet('Europa')}>Europa</button>
                  <button className={`after:w-[34px] ${planet === 'Titan' ? 'active-planet' : ''}`} 
                  onClick={() => setPlanet('Titan')}>Titan</button>
                </div>

                {data.destinations.map((i) => {
                    return(
                      <div key={i.name} className={`flex flex-col items-center lg:items-start gap-8 max-w-[500px] lg:max-w-none ${i.name === planet ? '' : 'hidden'}`}>
                        <h2 className='-mb-8'>{i.name}</h2>
                        <p>{i.description}</p>
                        <div className='w-[90%] h-px bg-secondary' />
                        <div className='flex flex-col items-center lg:items-start w-full gap-4 md:flex-row md:justify-around lg:justify-start lg:gap-20 md:gap-0'>
                          <div className='flex flex-col items-center lg:items-start'>
                            <p>AVG. DISTANCE</p>
                            <h4>{i.distance}</h4>
                          </div>
                          <div className='flex flex-col items-center lg:items-start'>
                            <p>Est. travel time</p>
                            <h4>{i.travel}</h4>
                          </div>
                        </div>
                      </div>
                )})}                
              </div>


          </div>

      </div>

    </section>
  )
}

export default Destination