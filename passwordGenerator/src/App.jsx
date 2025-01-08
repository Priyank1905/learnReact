import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*()_+";

      for (let i = 0; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length + 1));
      }

      setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword])


    useEffect(()=>{
      generatePassword();
    },[length,numberAllowed,charAllowed,generatePassword])

    const passwordRef = useRef(null)

    const  copyPasswordToClipboard = useEffect(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>password Generator</h1>
        <div className='flex shadow rounded-lg ovverflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full px-3 py-1'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-400 text-white rounded-r-lg px-3 py-0.5 shrink-0 hover:bg-blue-700'>Copy</button>
        </div>
        <div
          className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={charAllowed}
              onChange={() => { setCharAllowed ((prev) => !prev) }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
