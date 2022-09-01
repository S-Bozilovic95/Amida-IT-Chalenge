import React, { useState } from 'react'
import { act } from 'react-dom/test-utils';

type PlayGroundProps = {
    
}

export const PlayGround: React.FC<PlayGroundProps> = ({}) => {
    const[player,setPlayer]= useState<string>("");
    const[pcPlay,setPcPlay]=useState<string>("");
    let[num,setnum]= useState<number>(0)

    const handlePlayerChoice = (e: any)=>{
        setPlayer(e.target.value);   
    }

    
    const handleRound = ()=>{
        let arr =["papper","scissors","rock"];

           if(num===0){
            let roll = setInterval(()=>{
                let rand =Math.floor(Math.random()*arr.length);
                setPcPlay(arr[rand])
                // // console.log(active);
                // console.log("radi");
                setnum(num++)

                
                if(num>4){
                    clearInterval(roll);
                    // console.log("stani");
                    setnum(0);
                }
                
            },1000) 
           }
       
    }


    
console.log(num);

    


    return (
        <>
        {num}
            <h2>{pcPlay}</h2>
            <h2>{player}</h2>
            <div>
                <button value={"papper"} onClick={(e)=>handlePlayerChoice(e)}>paper</button>
                <button value={"scissors"} onClick={(e)=>handlePlayerChoice(e)}>scissors</button>
                <button value={"rock"} onClick={(e)=>handlePlayerChoice(e)}>rock</button>
            </div>
            <button onClick={()=>handleRound()}>start round</button>
        </>
    );
}