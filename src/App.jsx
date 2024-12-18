import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Example from './components/Example'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Search from './pages/Search'
import Random from './pages/Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 -z-10 h-max w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-700 opacity-20 blur-[100px]"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  )
}

export default App

