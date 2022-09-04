import React from 'react'

type DisplayProps = {
    active: boolean,
    win: string,
    player: string,
    pcPlay: string
}

export const Display: React.FC<DisplayProps> = ({active,win,player,pcPlay}) => {


    return (
        <div className='display'> 
            {active?<h2>zzzzzzzzzzzzzzzz</h2>:<h2>{pcPlay}</h2>}
            <h2>{player}</h2>
            <h3>{active? null:win}</h3>
        </div>
    );
}