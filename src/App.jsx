import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Example from './components/Example'
import Example2 from './components/Example2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Example2 />
    </>
    //<div className="flex items-center justify-center min-h-screen bg-blue-500">
    //      <h1 className="text-4xl font-bold text-white">Hello, Tailwind CSS!</h1>
    //</div>
  )
}

export default App
