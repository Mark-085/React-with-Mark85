import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 const [length,setLength]=useState(8)
 const [number,setNumber]=useState(false)
 const[character,setCharacter]=useState(false)
 const[password,setPassword]=useState("")

 const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number) str+="012345679"
  if(character) str+="!@#$%^&*-_+=[]{}~`"

  for (let i = 1; i <=length; i++) {
    let char= Math.floor(Math.random()*str.length + 1)
    pass +=str.charAt(char)
  }

  setPassword(pass)

 },[length, number, character, setPassword])

 const passwordRef = useRef(null)


 const copyPasswordToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 9);
 },[password])


 useEffect(() => {
  passwordGenerator()
}, [length, number, character, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text' value={password} className='' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' value={length} max={90} min={6} className='' onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                  setNumber((prev) => !prev)
            }}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  setCharacter((prev) => !prev )
              }} />

           <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
