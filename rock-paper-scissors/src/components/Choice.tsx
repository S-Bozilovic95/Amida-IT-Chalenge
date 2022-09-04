import React from 'react'

type ChoiceProps = {
    active: boolean,
    handlePlayerChoice: (e: any) => void,
}

export const Choice: React.FC<ChoiceProps> = ({active,handlePlayerChoice}) => {


    return (
        <div className='choice'>
            <button disabled={active?true:false} value={"papper"} onClick={(e)=>handlePlayerChoice(e)}>paper</button>
            <button disabled={active?true:false} value={"scissors"} onClick={(e)=>handlePlayerChoice(e)}>scissors</button>
            <button disabled={active?true:false} value={"rock"} onClick={(e)=>handlePlayerChoice(e)}>rock</button>
        </div>
    );
}