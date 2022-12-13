import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Navbar from './components/Navbar'

import data from './data.json'

const Home = lazy(() => import('./pages/Home'))
const Destination = lazy(() => import('./pages/destination/Destination'))
const Planet = lazy(() => import('./pages/destination/Planet'))
const Crew = lazy(() => import('./pages/crew/Crew'))
const Member = lazy(() => import('./pages/crew/Member'))
const Technology = lazy(() => import('./pages/technology/Technology'))
const ExampleTech = lazy(() => import('./pages/technology/ExampleTech'))

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div id='loading'>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />}>
            <Route path='/destination/moon' element={<Planet i={data.destinations[0]} />} />
            <Route path='/destination/mars' element={<Planet i={data.destinations[1]} />} />
            <Route path='/destination/europa' element={<Planet i={data.destinations[2]} />} />
            <Route path='/destination/titan' element={<Planet i={data.destinations[3]} />} />
          </Route>
          <Route path='/crew' element={<Crew />}>
            <Route path='/crew/commander' element={<Member i={data.crew[0]} />} />
            <Route path='/crew/mission-specialist' element={<Member i={data.crew[1]} />} />
            <Route path='/crew/pilot' element={<Member i={data.crew[2]} />} />
            <Route path='/crew/flight-engineer' element={<Member i={data.crew[3]} />} />
          </Route>
          <Route path='/technology' element={<Technology />}>
            <Route path='/technology/launch-vehicle' element={<ExampleTech i={data.technology[0]} />} />
            <Route path='/technology/spaceport' element={<ExampleTech i={data.technology[1]} />} />
            <Route path='/technology/space-capsule' element={<ExampleTech i={data.technology[2]} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
