import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section id='hero'>

      <div className='max-w-[1440px] w-full mx-auto -mt-24 flex flex-col xl:flex-row text-center xl:items-center
      pt-32 sm:pt-36 md:pt-40 
      px-6 sm:px-24 md:px-40 
      pb-16 min-h-screen gap-20'>

        <div className=' lg:flex-1'>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className='flex w-full justify-center lg:flex-1'>
          <Link to='/destination' id='explore-btn' className='bg-white w-36 xl:w-52 h-36 xl:h-52 rounded-full flex items-center 
          justify-center text-[20px]'>EXPLORE</Link>
        </div>

      </div>


    </section>
  )
}

export default Home