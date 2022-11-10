import { useSelector } from "react-redux"
import { convert } from "service/CurrencyApi";

export const ConvertForm = ({setResult, base}) =>{
    const rates = useSelector(store => store.rates);
    const submitHendler = (event) => {
        event.preventDefault();
        const {from, amount} = event.target;
        convert(from.value, base, amount.value)
        .then(result => setResult(result.result))
        .catch(err => console.log(err))
    }
    return <form onSubmit={submitHendler}>
        <label>
            From
            <select name="from">
            {Object.keys(rates).map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </label>
        <p>{`to: ${base}`}</p>
        <label >
            Amount
            <input type="number" name ="amount" required/>
        </label>
        <button type="submit">convert</button>
    </form>
}