import { useState } from 'react'

function App() {
  let [color, setColor] = useState('olive')
  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-2">
        <div onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{ backgroundColor: 'red' }}>
          Red
        </div>
        <div onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'green' }}>
          Green
        </div>
        <div onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'blue' }}>
          Blue 
        </div>
        <div onClick={()=> setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'olive' }}>
          Olive 
        </div>
        <div onClick={()=> setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'gray' }}>
          Gray 
        </div>
        <div onClick={()=> setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'pink' }}>
          Pink 
        </div>
        <div onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'yellow' }}>
          Yellow 
        </div>
        <div onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{ backgroundColor: 'white' }}>
          White 
        </div>
        <div onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'black' }}>
          Black 
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
