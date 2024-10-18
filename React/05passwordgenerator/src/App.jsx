import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] =  useState(false);

  const [password,setPassword] = useState("");


  //! useRef hook

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrstuvwxyz";
      
      if(numberAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%&*?.,+-_";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPassword(pass);
      
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{ passwordGenerator() },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500 bg-gray-800 my-8'>

          <h1 className='text-white text-center my-3'>Password Generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" value={password} placeholder='Password' className='outline-none w-full py-1 px-3' readOnly ref={passwordRef}/>

                <button className='outline-none text-white shrink-0 px-3 py-0.5 bg-blue-700' onClick={copyPasswordToClipboard}>Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type='range' min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
              <label>Length : {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type='checkbox'  defaultChecked={numberAllowed} id='numberInput' className='cursor-pointer' onChange={()=>{setNumberAllowed((prev) => !prev)}}/>
              <label htmlFor='numberInput'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type='checkbox'  defaultChecked={charAllowed} id='charInput' className='cursor-pointer' onChange={()=>{setCharAllowed((prev) => !prev)}}/>
              <label htmlFor='charInput'>Characters</label>
            </div>

          </div>

      </div>
    </>
  )
}

export default App
