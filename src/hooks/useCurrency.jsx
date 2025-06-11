import { useEffect, useState } from "react";


function useCurrency(fromCurrency) {
    let [data, setData] = useState({});

    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
        .then(v => v.json())
        .then(res => {
            setData(res[fromCurrency])
        })
    }, [fromCurrency])
    return data;
}

export default useCurrency;