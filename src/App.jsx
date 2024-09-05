import { useState } from 'react'
import { Component1 } from './components'
import useCurrency from './hooks/useCurrency'


function App() {
  const [amount, setAmount] = useState(0);
  const [from,setfrom] = useState("inr");
  const [to,setTo] = useState("usd");
  const [convertedAmount, setConvertAmount] = useState(0);

  const currencyInfo = useCurrency(from)
 
  const options = Object.keys(currencyInfo)
  
  const swap = () =>{
    setfrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-screen h-screen flex flex-wrap justify-center items-center bg-[url("https://thumbs.dreamstime.com/z/four-main-world-currencies-banknotes-square-collage-dollar-yuan-euro-ruble-form-images-forming-compact-background-95733232.jpg")] bg-cover bg-no-repeat'
    >
  <div className="w-full">
    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-3xl ">
    <form onSubmit={(e)=>{
      e.preventDefault();
      convert()
    }}>
      <div className='w-full mb-1 font-bold text-lg'>
        <Component1 label="from"
        amount={amount} 
        CurrencyOption={options}
        onCurrencyChange={(currency) => setfrom(currency)}
        SelectedCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
        />
      </div>
      <div className='relative w-full h-0.5'>
        <button 
        type="button"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
          swap
        </button>
      </div>
      <div className='w-full mb-1 font-bold text-lg'>
      <Component1 label="to"
        amount={convertedAmount} 
        CurrencyOption={options}
        onCurrencyChange={(currency) => setTo(currency)}
        SelectedCurrency={to}
        />
      </div>
      <button type="submit" 
      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
    </div>
    <div>
      
    </div>
  </div>
    </div>
  )
}

export default App
