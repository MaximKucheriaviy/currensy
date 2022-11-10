import { useSelector } from "react-redux"
import { getCurrency } from "service/CurrencyApi";
import { useEffect, useState } from "react";

export const CurrensyExchage = ({base}) => {
    const rates = useSelector(state => state.rates);
    const [excageRates, setExchageRate] = useState({}); 
    const names = Object.keys(rates).join(",");
    useEffect(() => {
        if(!base){
            return;
        }
        getCurrency(base, names)
        .then(respose => setExchageRate(respose.rates))
        .catch(err => console.log(err))
    },[base, names])
    return <main>
        <p>Country:</p>
        <p>{rates[base]}</p>
        <ul>
            {base && Object.entries(excageRates).map(item => <li key={item[0]}>{`${item[0]}: ${item[1].toFixed(2)}`}</li>)}
        </ul>
    </main>
}