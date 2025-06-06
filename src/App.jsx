import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) characters += "0123456789";
    let _password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      _password += characters[randomIndex];
    }
    setPassword(_password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed]);

  function copyText() {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <div className='mt-32 ml-2'>
      <h1 className="text-2xl text-gray-800">The Password Generator</h1>
      <div className='mt-6 margin-auto ml-2'>
        <input type="text" id='password' className='border-b outline-none w-72 border-black pl-2 h-10' readOnly value={password} ref={passwordRef} placeholder='Generated Password'/>
        <button className=' px-4 py-2  ml-4' onClick={copyText}>Copy</button>
      </div>
      <div className='mt-4 flex ml-2'>
        <div>
          <input type="range" className='cursor-pointer' min={6} max={50} value={length} onChange={(e) => setLength(e.target.value)} name="" id="" />
          <label htmlFor="length" className='ml-2 w-16'>Length: {length}</label>
        </div>
        <div>
          <input type="checkbox" className='cursor-pointer ml-8' name="numbers" id="numbers" checked={isNumberAllowed} onChange={(e) => setIsNumberAllowed(prev => !prev)} />
          <label htmlFor="numbers" className='ml-2 cursor-pointer'>Include Numbers</label>
        </div>
      </div>
    </div>
  );
}

export default App;
