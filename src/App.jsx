import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/index'
import { Crew, Destination, Home, Technology, Planet, Member, ExampleTech } from './pages/index'

import data from './data.json'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} >
          <Route path='/destination/moon' element={<Planet i={data.destinations[0]} />} />
          <Route path='/destination/mars' element={<Planet i={data.destinations[1]} />} />
          <Route path='/destination/europa' element={<Planet i={data.destinations[2]} />} />
          <Route path='/destination/titan' element={<Planet i={data.destinations[3]} />} />
        </Route>
        <Route path='/crew' element={<Crew />} >
          <Route path='/crew/commander' element={<Member i={data.crew[0]} />} />
          <Route path='/crew/mission-specialist' element={<Member i={data.crew[1]} />} />
          <Route path='/crew/pilot' element={<Member i={data.crew[2]} />} />
          <Route path='/crew/flight-engineer' element={<Member i={data.crew[3]} />} />
        </Route>
        <Route path='/technology' element={<Technology />} >
          <Route path='/technology/launch-vehicle' element={<ExampleTech i={data.technology[0]} />} />
          <Route path='/technology/spaceport' element={<ExampleTech i={data.technology[1]} />} />
          <Route path='/technology/space-capsule' element={<ExampleTech i={data.technology[2]} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App