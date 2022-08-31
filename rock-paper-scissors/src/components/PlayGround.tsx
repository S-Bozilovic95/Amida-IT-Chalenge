import React, { useState } from 'react'

type PlayGroundProps = {
    
}

export const PlayGround: React.FC<PlayGroundProps> = ({}) => {
    const[player,setPlayer]= useState<string>("");
    const[pcPlay,setPcPlay]=useState<string>("");

    const handlePlayerChoice = (e: any)=>{
        setPlayer(e.target.value);   
    }



    return (
        <>
            <h2>{player}</h2>
            <h2>{pcPlay}</h2>
            <div>
                <button value={"papper"} onClick={(e)=>handlePlayerChoice(e)}>paper</button>
                <button value={"scissors"} onClick={(e)=>handlePlayerChoice(e)}>scissors</button>
                <button value={"rock"} onClick={(e)=>handlePlayerChoice(e)}>rock</button>
            </div>
        </>
    );
}