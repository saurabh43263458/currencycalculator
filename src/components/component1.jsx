import { useId } from "react";

function Component1({
    
    label,
     amount, onAmountChange, onCurrencyChange,  SelectedCurrency = "usd", amountDisabled=false, currencyDisabled=false, CurrencyOption = [] ,
}){
    const amountInputId =useId()
    return (
        <div className={"bg-white p-3  rounded-lg text-sm flex"}>
     <div className=" w-1/2 flex flex-col text-center pr-10">
   
    <label htmlFor="amountInputId" className="text-black mb-2 inline-block">
            {label}
            </label>
 <input 
        id={amountInputId} className=" w-full p-2 bg-slate-400  rounded-lg " type="number" placeholder="Amount" disabled={amountDisabled} value={amount}
            onChange={(e)=>{
                onAmountChange && onAmountChange(Number(e.target.value))
            }}/>
    </div>

    <div className="w-1/2 flex flex-wrap justify-end text-right">
    <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className=" rounded-lg p-1 bg-gray-950 cursor-pointer "  value={SelectedCurrency} onChange={(e)=>{
                onCurrencyChange && onCurrencyChange(e.target.value)
            }} disabled={currencyDisabled} >
                {CurrencyOption.map((currency)=>(
                  <option key={currency} value={currency}>
                     {currency}
                    </option>))
}
            </select></div>
            </div>
       
    )
}

export default Component1;