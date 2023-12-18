import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] =useState('usd')
  const [to,setTo] =useState('inr')
  const [convertedAmount,setConvertedAmount] =useState(0)

  const currencyInfo =useCurrencyInfo(from)
  const options= Object.keys(currencyInfo)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://images.pexels.com/photos/19212469/pexels-photo-19212469/free-photo-of-a-close-up-of-a-bunch-of-yellow-and-orange-thread.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-1">
                    <InputBox
    label="From"
    amount={amount}
    currencyOption={options} // Ensure `currencyOption` is passed correctly
    oncurrencyChange={(currency) => setFrom(currency)} // Here, `currency` is passed to `setFrom`
    selectCurrency={from}
    onAmountChange={(amount) => setAmount(amount)}
/>

                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}  
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                    <InputBox
                            label="to"
                            amount ={convertedAmount}
                            currencyOption={options}
                            oncurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
