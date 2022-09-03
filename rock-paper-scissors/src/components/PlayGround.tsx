import React, { useEffect, useState } from 'react'
import { getEnvironmentData } from 'worker_threads';


type PlayGroundProps = {
    
}

export const PlayGround: React.FC<PlayGroundProps> = ({}) => {
    const[player,setPlayer]= useState<string>("");
    const[pcPlay,setPcPlay]=useState<string>("");
    const[active,setActive]= useState<boolean>(true);
    const[win,setWin]= useState<string>("draw");
    const[block,setBlock]= useState<boolean>(true);
   
    

    const handlePlayerChoice = (e: any)=>{
        e.preventDefault();

        let arr =["papper","scissors","rock"];
        let rand =Math.floor(Math.random()*arr.length);
        setPcPlay(arr[rand]);
        setPlayer(e.target.value);
        setActive(true);
        setBlock(false);
    }


    
    const handleRound = ()=>{
        setActive(true);
        console.log(player, "svetozar");
        console.log(pcPlay);


        setTimeout(()=>{
            setActive(false);
            setBlock(true);

            if(player==="papper" && pcPlay==="rock"){
                setWin("win");  
            }
    
            if(player==="scissors" && pcPlay==="papper"){
                setWin("win");
            }
            
            if(player==="rock" && pcPlay==="scissors"){
                setWin("win");
            }
    
            if(player === pcPlay){
                setWin("draw");
            }
    
            if(player==="rock" && pcPlay==="papper"){
                setWin("lost");  
            }
    
            if(player==="papper" && pcPlay==="scissors"){
                setWin("lost");
            }
            
            if(player==="scissors" && pcPlay==="rock"){
                setWin("lost");
            }  
        },3000)
    }


    return (
        <>
        {active?<h2>zzzzzzzzzzzzzzzz</h2>:<h2>{pcPlay}</h2>}
            
            <h2>{player}</h2>
            <h3>{win}</h3>
            <div>
                <button value={"papper"} onClick={(e)=>handlePlayerChoice(e)}>paper</button>
                <button value={"scissors"} onClick={(e)=>handlePlayerChoice(e)}>scissors</button>
                <button value={"rock"} onClick={(e)=>handlePlayerChoice(e)}>rock</button>
            </div>
            <button disabled={block?true:false} onClick={()=>handleRound()}>start round</button>
        </>
    );
}