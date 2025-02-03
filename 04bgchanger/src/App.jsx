import { useState } from "react"


function App() {
 const [color,setColor]=useState("pink")
  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="py-10 px-10 max-w-sm mx-auto bg-slate-400 flex items-center justify-center " style={{backgroundColor:color}}>
      <div className="py-10 px-10 max-w-sm mx-auto bg-green-200 flex items-center justify-center gap-4">
        <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">red</button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">green</button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}} className="rounded-full">blue</button>
        <button onClick={()=>setColor("orange")} style={{backgroundColor:"yellow"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">yellow</button>
        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"orange"}} className="rounded-full">orange</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default App