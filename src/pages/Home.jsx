import { ConvertForm } from "components/ConvertForm/ConvertForm"
import { useState } from "react"

export const Home = ({base}) => {
    const [result, setResult] = useState(0);
    return <main>
        <ConvertForm base={base} setResult={setResult}/>
        {result !== 0 && <p>Result:{result.toFixed(2)}</p>}
    </main>
}