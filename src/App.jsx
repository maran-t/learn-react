import { useState } from 'react';
import './App.css';
import { InputBox } from './components/index.js';
import useCurrency from './hooks/useCurrency';

function App() {
  let [fromAmount, setFromAmount] = useState(0);
  let [fromCurrency, setFromCurrency] = useState('usd');
  let [toAmount, SetToAmount] = useState(0);
  let [toCurrency, setToCurrency] = useState('inr');

  let currencyInfo = useCurrency(fromCurrency);
  let currencies = Object.keys(currencyInfo);

  const swap = () => {
    SetToAmount(fromAmount);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setFromCurrency(toCurrency);
  }

  const convertCurrency = () => {
    let total = fromAmount * currencyInfo[toCurrency];
    SetToAmount(total);
  }

  return (
    <div className='w-full h-screen flex flex-wrap items-center justify-center' 
    style={{ width: '476px' }}>
      <div className='w-full max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-lg backdrop-blur-md'>
        <h1 className='text-gray-800 text-2xl font-bold mb-8'>Currency Converter 💹</h1>
        <InputBox label='From' amount={fromAmount} currency={fromCurrency} setCurrency={setFromCurrency} setAmount={setFromAmount} currencyList={currencies}/>
        <div className='flex flex-wrap justify-center items-center'>
          <button className='text-white shadow-md -mt-2 -mb-2 bg-blue-500' onClick={swap}>Swap</button>
        </div>
        <InputBox label='To' amount={toAmount} currency={toCurrency} setCurrency={setToCurrency} setAmount={SetToAmount} currencyList={currencies}/>
        <button className='mt-4 px-4 py-2 text-white shadow-md' onClick={convertCurrency}>Convert Now</button>
      </div>
    </div>
  );
}

export default App;
