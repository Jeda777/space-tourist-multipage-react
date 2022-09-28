import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

const ExampleTech = (i) => {
    const d = i.i
    const navigate = useNavigate()
    const location = useLocation().pathname
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('swipe')
            switch (location) {
                case '/technology/launch-vehicle':
                    navigate('../spaceport')
                    break
                case '/technology/spaceport':
                    navigate('../space-capsule')
                    break
                case '/technology/space-capsule':
                    navigate('../launch-vehicle')
                    break
            }
        },
        onSwipedRight: () => {
            console.log('swipe')
            switch (location) {
                case '/technology/launch-vehicle':
                    navigate('../space-capsule')
                    break
                case '/technology/spaceport':
                    navigate('../launch-vehicle')
                    break
                case '/technology/space-capsule':
                    navigate('../spaceport')
                    break
            }
        },
    })

    return (
        <div {...handlers} className='grid grid-cols-1 justify-items-center gap-8 xl:grid-cols-[1fr_6fr_5fr] xl:items-center'>

            <div className='text-white flex gap-4 justify-center order-2 xl:order-1 xl:flex-col'>
                <button className={`w-10 h-10 md:w-12 md:h-12 md:text-xl lg:w-14 lg:h-14 lg:text-2xl xl:w-20 xl:h-20 xl:text-3xl
                    rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100 transition-all
                    ${d.name === 'Launch vehicle' ? 'tab-active' : ''}`} onClick={() => navigate('../launch-vehicle')}>1</button>
                <button className={`w-10 h-10 md:w-12 md:h-12 md:text-xl lg:w-14 lg:h-14 lg:text-2xl xl:w-20 xl:h-20 xl:text-3xl
                    rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100 transition-all
                    ${d.name === 'Spaceport' ? 'tab-active' : ''}`} onClick={() => navigate('../spaceport')}>2</button>
                <button className={`w-10 h-10 md:w-12 md:h-12 md:text-xl lg:w-14 lg:h-14 lg:text-2xl xl:w-20 xl:h-20 xl:text-3xl
                    rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100 transition-all
                    ${d.name === 'Space capsule' ? 'tab-active' : ''}`} onClick={() => navigate('../space-capsule')}>3</button>
            </div>

            <div className='max-w-[500px] flex flex-col px-6 xl:px-0 order-3 xl:order-2'>
                <h4 className='text-secondary text-base sm:text-lg lg:text-2xl 2xl:text-3xl'>THE TERMINOLOGY…</h4>
                <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[72px] pb-3 xl:mb-4'>{d.name}</h3>
                <p className='sm:text-lg lg:text-xl 2xl:text-2xl'>{d.description}</p>
            </div>

            <img
                src={d.imageLandscape}
                alt={d.name}
                className='xl:hidden order-1' />

            <img
                src={d.imagePortrait}
                alt={d.name}
                className='hidden xl:inline-block order-3' />

        </div>
    )
}

export default ExampleTech