import React, { useState } from 'react';

export default function PageYear() {
    let [year, setYear] = useState("");    
    let [inputVal, setInputVal] = useState(1)

    let changeinput = (event) => {
        setInputVal(event.target.value)
    }    
    const addYear = () => {        
        setYear(inputVal)
        fetch(`http://numbersapi.com/${inputVal}/year`)
        .then(response => response.text()
        .then(text => setYear(text)
        )); 
    }
    return (
        <div className="info">
            <h1>YEAR</h1>
            <p>Please input Year</p>
            <p>{year}</p>
            <input type="number" value={inputVal} onChange={changeinput}/>
            <button onClick={addYear}>OK</button>
        </div>
    )
}