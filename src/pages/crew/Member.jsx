import { useNavigate, useLocation } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { members } from '../../assetsIndex'

const Member = (i) => {
    const d = i.i
    const navigate = useNavigate()
    const location = useLocation().pathname
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('swipe')
            switch (location) {
                case '/crew/commander':
                    navigate('../mission-specialist')
                    break
                case '/crew/mission-specialist':
                    navigate('../pilot')
                    break
                case '/crew/pilot':
                    navigate('../flight-engineer')
                    break
                case '/crew/flight-engineer':
                    navigate('../commander')
                    break
            }
        },
        onSwipedRight: () => {
            console.log('swipe')
            switch (location) {
                case '/crew/commander':
                    navigate('../flight-engineer')
                    break
                case '/crew/mission-specialist':
                    navigate('../commander')
                    break
                case '/crew/pilot':
                    navigate('../mission-specialist')
                    break
                case '/crew/flight-engineer':
                    navigate('../pilot')
                    break
            }
        },
    })

    return (
        <div {...handlers} className='flex flex-col-reverse md:flex-col xl:flex-row items-center gap-10 text-center xl:text-left w-full 
        xl:justify-around'>

            <div className='flex flex-col items-center gap-4 md:gap-10 xl:gap-40 md:flex-col-reverse'>

                <div className='flex gap-2'>
                    <button className=
                        {`w-[10px] h-[10px] rounded-full bg-white ${d.role === 'Commander' ? '' : 'opacity-50'} hover:opacity-75 transition`}
                        onClick={() => navigate('../commander')}></button>
                    <button className=
                        {`w-[10px] h-[10px] rounded-full bg-white ${d.role === 'Mission Specialist' ? '' : 'opacity-50'} hover:opacity-75 transition`}
                        onClick={() => navigate('../mission-specialist')}></button>
                    <button className=
                        {`w-[10px] h-[10px] rounded-full bg-white ${d.role === 'Pilot' ? '' : 'opacity-50'} hover:opacity-75 transition`}
                        onClick={() => navigate('../pilot')}></button>
                    <button className=
                        {`w-[10px] h-[10px] rounded-full bg-white ${d.role === 'Flight Engineer' ? '' : 'opacity-50'} hover:opacity-75 transition`}
                        onClick={() => navigate('../flight-engineer')}></button>
                </div>

                <div className='max-w-[500px]'>
                    <h4 className='opacity-50 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl'>{d.role}</h4>
                    <h3 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-[72px] pb-3'>{d.name}</h3>
                    <p className='sm:text-lg lg:text-xl 2xl:text-2xl'>{d.bio}</p>
                </div>

            </div>

            <div id='crew-img-container'>
                <img className='max-w-[180px] sm:max-w-[220px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px]'
                    src={members[d.index]} alt={d.name} />
            </div>

        </div>
    )
}

export default Member