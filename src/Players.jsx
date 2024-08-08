import { useState } from "react"

export default function Players() {
    const [team, setteam] = useState(10)

    const playerSet = () => {
        setteam(team + 1)
    }
    function playerRemove() {
        const newplayerRemove = team - 1;
        setteam(newplayerRemove)
    }
    return (
        <div>
            <h2>Player:{team}</h2>
            <button onClick={playerSet}>add to player</button>
            <button onClick={playerRemove}>remove to player</button>
        </div>
    )
}