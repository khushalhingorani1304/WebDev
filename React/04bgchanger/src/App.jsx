import {useState} from 'react'


function App() {

  const [color,setColor] = useState("Beige")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="bg-white flex flex-wrap justify-center gap-20 rounded-2xl shadow-lg px-3 py-2">
            <button onClick={()=> {setColor("red")}} className='outline-none rounded-full text-white px-2 py-1 shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> {setColor("blue")}} className='outline-none rounded-full text-white px-2 py-1 shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=> {setColor("green")}} className='outline-none rounded-full text-white px-2 py-1 shadow-lg' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> {setColor("orange")}} className='outline-none rounded-full text-white px-2 py-1 shadow-lg' style={{backgroundColor:"Orange"}}>Orange</button>
            <button onClick={()=> {setColor("olive")}} className='outline-none rounded-full text-white px-2 py-1 shadow-lg' style={{backgroundColor:"Olive"}}>Olive</button>
            <button onClick={()=> {setColor("black")}} className='outline-none rounded-full text-white px-2 py-1 shadow-lg' style={{backgroundColor:"Black"}}>Black</button>
        </div>
    </div>
    </div>
  )
}

export default App
