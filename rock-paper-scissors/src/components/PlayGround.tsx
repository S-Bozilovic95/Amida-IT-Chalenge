import React, { useState } from 'react'


type PlayGroundProps = {
    
}

export const PlayGround: React.FC<PlayGroundProps> = ({}) => {
    const[player,setPlayer]= useState<string>("");
    const[pcPlay,setPcPlay]=useState<string>("");
    const[active,setActive]= useState<boolean>(false);
    const[win,setWin]= useState<string>("draw");
    

    const handlePlayerChoice = (e: any)=>{
        let arr =["papper","scissors","rock"];
        let rand =Math.floor(Math.random()*arr.length);
        setPcPlay(arr[rand]);
        setPlayer(e.target.value);   
    }

    
    const handleRound = async ()=>{
        setActive(true);

        await setTimeout(()=>{
            setActive(false);

            if(player==="papper" && pcPlay==="rock"){
                setWin("win");
                console.log(player, 1);  
            }
    
            if(player==="scissors" && pcPlay==="papper"){
                setWin("win");
                console.log(player, 2);
            }
            
            if(player==="rock" && pcPlay==="scissors"){
                setWin("win");
                console.log(player, 3);
            }
    
            if(player === pcPlay){
                setWin("draw")
                console.log(player, 4);
            }
    
            if(player==="rock" && pcPlay==="papper"){
                setWin("lost");
                console.log(player, 5);  
            }
    
            if(player==="papper" && pcPlay==="scissors"){
                setWin("lost");
                console.log(player, 6);
            }
            
            if(player==="scissors" && pcPlay==="rock"){
                setWin("lost");
                console.log(player, 7);
            }   
        },3000)
    }

    

    



    


    return (
        <>
        {active?<h2>zzzzzzzzzzzzzzzz</h2>:<h2>{pcPlay}</h2>}
            
            <h2>{player}</h2>

            <h1>{win}</h1>
            <div>
                <button value={"papper"} onClick={(e)=>handlePlayerChoice(e)}>paper</button>
                <button value={"scissors"} onClick={(e)=>handlePlayerChoice(e)}>scissors</button>
                <button value={"rock"} onClick={(e)=>handlePlayerChoice(e)}>rock</button>
            </div>
            <button onClick={()=>handleRound()}>start round</button>
        </>
    );
}