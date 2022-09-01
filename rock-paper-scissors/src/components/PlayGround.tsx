import React, { useState } from 'react'
import { act } from 'react-dom/test-utils';

type PlayGroundProps = {
    
}

export const PlayGround: React.FC<PlayGroundProps> = ({}) => {
    const[player,setPlayer]= useState<string>("");
    const[pcPlay,setPcPlay]=useState<string>("");
    const[active,setActive]= useState<boolean>(false);
    const[win,setWin]= useState<string>("draw");
    

    const handlePlayerChoice = (e: any)=>{
        setPlayer(e.target.value);   
    }

    
    const handleRound = ()=>{
        let arr =["papper","scissors","rock"];
        let rand =Math.floor(Math.random()*arr.length);
        setPcPlay(arr[rand]);
        setActive(true);
        
        let num:number =0;
        let roll = setInterval(()=>{
            num++;
        
            if(num>3){
                clearInterval(roll);
                num=0;
                setActive(false)
                
                if(player==="papper" && pcPlay==="rock"){
                    setWin("win");
                    console.log("1");  
                }
        
                if(player==="scissors" && pcPlay==="papper"){
                    setWin("win");
                    console.log("2");
                }
                
                if(player==="rock" && pcPlay==="scissors"){
                    setWin("win");
                    console.log("3");
                }
        
               
            }
        },1000) 
    }

console.log(pcPlay);



    


    return (
        <>
        {active?<h2>zzzzzzzzzzzzzzzz</h2>:<h2>{pcPlay}</h2>}
            
            <h2>{player}</h2>

            <h1>{win==="win" ? "win":"lost"}</h1>
            <div>
                <button value={"papper"} onClick={(e)=>handlePlayerChoice(e)}>paper</button>
                <button value={"scissors"} onClick={(e)=>handlePlayerChoice(e)}>scissors</button>
                <button value={"rock"} onClick={(e)=>handlePlayerChoice(e)}>rock</button>
            </div>
            <button onClick={()=>handleRound()}>start round</button>
        </>
    );
}