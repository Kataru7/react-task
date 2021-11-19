import React, { useState } from 'react';

export default function PageYear() {
    let [res, setRes] = useState("")
    let [mounth, setMounth] = useState("1");
    let [day, setDay] = useState("1")    
    let [inputValMounth, setinputValMounth] = useState(1)
    let [inputValDay, setinputValDay] = useState(1)

    let changeinputMouth = (event) => {
        setinputValMounth(event.target.value)
    }    
    let changeinputDay = (event) => {
        setinputValDay(event.target.value)
    } 
    const createDate = () => {        
        setMounth(inputValMounth)
        setDay(inputValDay)

        if (mounth <= 12 && day <= 12){

            fetch(`http://numbersapi.com/${mounth}/${day}/date`)
            .then(response => response.text()
            .then(text => setRes(text)
            ));
    
        }
    }
    return (
        <div className="info">
            <h1>YEAR</h1>
            <p>Please input Year</p>
            <p>{res}</p>
            <input type="number" value={inputValMounth} onChange={changeinputMouth}/>
            <input type="number" value={inputValDay} onChange={changeinputDay}/>
            <button onClick={createDate}>OK</button>
        </div>
    )
}


