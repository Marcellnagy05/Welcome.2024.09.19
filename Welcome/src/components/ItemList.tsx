import React, { useState } from 'react';

const ItemList : React.FC = () => {
    const [itemCounter, setItemCounter] = useState<number>(0); 
    const items = Array.from({length: itemCounter}, (_,index) => `Item ${index+1}`)

    const incrementCounter = () =>{
        setItemCounter(prevCounter => prevCounter+1)
    }
    const decrementCounter =()=>{
        setItemCounter(prevCounter => prevCounter-1)
    }
    return (
        <div>
            <input type="button" value="+" onClick={incrementCounter} />
            <input type="number" disabled value={itemCounter}/>
            <input type="button" value="-" onClick={decrementCounter} />
            <ul>
                {items.map((val: string) => (
                    <li>{val}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default ItemList