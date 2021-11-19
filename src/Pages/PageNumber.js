import React, { useState } from 'react';

export default function PageNamber() {
    let [data, setData] = useState("");
    
    let [inputVal, setInputVal] = useState(1)

    let changeinput = (event) => {
        setInputVal(event.target.value)
    }
    
    const addNumber = () => {        
        setData(inputVal)
        fetch(`http://numbersapi.com/${inputVal}/math`)
        .then(response => response.text()
        .then(text => setData(text)
        )); 
    }
    


    return (
        
        <div className="info">
            <h1>NUMBER</h1>
            <p>Please input number</p>
            <p>{data}</p>
            <input type="number" value={inputVal} onChange={changeinput}/>
            <button onClick={addNumber}>OK</button>
        </div>
    )
}