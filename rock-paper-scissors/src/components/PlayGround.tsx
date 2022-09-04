import React, { useEffect, useState } from 'react'
import { getEnvironmentData } from 'worker_threads';
import { Choice } from './Choice';
import { Display } from './Display';


type PlayGroundProps = {

}

export const PlayGround: React.FC<PlayGroundProps> = ({}) => {
    const[player,setPlayer]= useState<string>("");
    const[pcPlay,setPcPlay]=useState<string>("");
    const[active,setActive]= useState<boolean>(false);
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
        <section className='playground'>
            <Display active={active} win={win} player={player} pcPlay={pcPlay} />
            <Choice active={active} handlePlayerChoice={handlePlayerChoice}/>
            <button className='playground__startRound' disabled={block?true:false} onClick={()=>handleRound()}>start round</button>
            <h3 className='playground__instructions'>{block?"select any option":"click start round when you are ready"}</h3>
        </section>
    );
}