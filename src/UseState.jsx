import { useState } from "react"

export default function Usestate() {
    const [count, setcount] = useState(0)
    const hendelclick = () => {
        const newadd = count + 1;
        setcount(newadd)
        
    }
    const hendelreduce=()=>{
        const newreduce = count-1;
        setcount(newreduce);

    }
    return (
        <div style={{ border: '2px solid red', padding: '11px' }}>
            <h3>counter:{count} </h3>
            <button onClick={hendelclick}>click hear</button>
            <button onClick={hendelreduce}>reduce</button>
        </div>
    )
}