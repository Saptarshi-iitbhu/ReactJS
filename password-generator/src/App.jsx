import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if(number) str += "0123456789";
    if(symbol) str += "!@#$%^&*()_+";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, number, symbol, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.select(0,password.length);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    console.log("password generator called");
    passwordGenerator();
  },[length, number, symbol, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-800">
          <h1 className="text-white text-center text-2xl mb-4">Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden bg-white">
            <input 
              type="text" 
              value={password}
              className="outline-none w-full py-2 px-3 text-gray-700"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input 
              type="range" 
              min="8" 
              max="20" 
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox" 
              defaultChecked={number}
              id="numberInput"
              onChange={() => {setNumber(prev => !prev);}}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox" 
              defaultChecked={symbol}
              id="characterInput"
              onChange={() => {setSymbol(prev => !prev);}}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
