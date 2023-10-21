import { useState } from "react"


function App() {
  let [color,setColor] = useState("black")

  return (
    <div className="flex justify-center content-center  h-screen duration-500 " style={{background:color}} >
    <div className="flex justify-center content-center flex-wrap bg-white  rounded-lg h-auto fixed bottom-10 py-6 gap-10 w-10/12">
      <button className=" text-xl bg-red-600 p-2 px-4 w-36 border-none rounded-xl text-white " onClick={()=>setColor("red")}>
        red
      </button>
      <button className=" text-xl bg-purple-600 p-2 w-36 px-4 border-none rounded-xl text-white" onClick={()=>setColor("purple")}>
        purple
      </button>
      <button className=" text-xl bg-teal-600 p-2  w-36 px-4 border-none rounded-xl text-white"onClick={()=>setColor("teal")}>
        teal
      </button>
      <button className=" text-xl bg-blue-600 p-2 w-36 px-4 border-none rounded-xl text-white"onClick={()=>setColor("blue")}>
        blue
      </button>
    </div>
    </div>
  )
}

export default App
