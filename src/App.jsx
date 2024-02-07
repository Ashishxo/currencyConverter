import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen flex flex-wrap justify-center items-center'>
      <div className='h-[300px] w-[400px] bg-white rounded-3xl bg-opacity-30 backdrop-blur-sm shadow-2xl'>

      </div>
    </div>
    </>
  )
}

export default App
