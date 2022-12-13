import { useNavigate, useLocation } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import { planets } from '../../assetsIndex'

type Props = {
  i: { name: string; index: number; description: string; distance: string; travel: string }
}

const Planet: React.FC<Props> = ({ i }) => {
  const navigate = useNavigate()
  const location = useLocation().pathname
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('swipe')
      switch (location) {
        case '/destination/moon':
          navigate('../mars')
          break
        case '/destination/mars':
          navigate('../europa')
          break
        case '/destination/europa':
          navigate('../titan')
          break
        case '/destination/titan':
          navigate('../moon')
          break
      }
    },
    onSwipedRight: () => {
      console.log('swipe')
      switch (location) {
        case '/destination/moon':
          navigate('../titan')
          break
        case '/destination/mars':
          navigate('../moon')
          break
        case '/destination/europa':
          navigate('../mars')
          break
        case '/destination/titan':
          navigate('../europa')
          break
      }
    },
  })

  return (
    <div {...handlers} className='flex flex-col w-full gap-6 items-center lg:grid lg:grid-cols-2 lg:px-24'>
      <img className='max-w-[170px] lg:max-w-[445px] w-full' src={planets[i.index]} alt={i.name} />

      <div className='flex flex-col gap-5'>
        <div
          id='planet-btns'
          className='flex justify-center lg:justify-start gap-6 uppercase text-white text-lg sm:text-xl md:text-2xl xl:text-3xl'
        >
          <button className={`after:w-[34px] ${i.name === 'Moon' ? 'active-planet' : ''}`} onClick={() => navigate('../moon')}>
            Moon
          </button>
          <button className={`after:w-[31px] ${i.name === 'Mars' ? 'active-planet' : ''}`} onClick={() => navigate('../mars')}>
            Mars
          </button>
          <button className={`after:w-[46px] ${i.name === 'Europa' ? 'active-planet' : ''}`} onClick={() => navigate('../europa')}>
            Europa
          </button>
          <button className={`after:w-[34px] ${i.name === 'Titan' ? 'active-planet' : ''}`} onClick={() => navigate('../titan')}>
            Titan
          </button>
        </div>

        <div className='flex flex-col items-center lg:items-start gap-8 max-w-[500px] lg:max-w-none'>
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
      </div>
    </div>
  )
}

export default Planet
