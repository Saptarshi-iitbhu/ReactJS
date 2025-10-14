import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")


  console.log("Current color:", color)

  return (
    <>
      <div
        className="w-full h-screen transition-all duration-500"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
              onClick={() => {
                console.log("Clicked Red Button")
                setColor("red")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => {
                console.log("Clicked Green Button")
                setColor("green")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => {
                console.log("Clicked Blue Button")
                setColor("blue")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => {
                console.log("Clicked Yellow Button")
                setColor("yellow")
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Yellow
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
