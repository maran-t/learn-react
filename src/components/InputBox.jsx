

function InputBox({label, amount, currency, setAmount, setCurrency, currencyList}) {
    return (
        <div className="bg-white p-2 rounded">
            <div className="flex flex-wrap justify-between text-gray-500">
                <label>{label}</label>
                <label>Currency Type</label>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
                <input className="" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} name="" id="" />
                <select className="w-16 bg-slate-100 rounded" value={currency} onChange={(e) => setCurrency(e.target.value)} name="" id="">
                    {
                        currencyList.map((v, i) => {
                            return <option key={i} value={v}>{v}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;