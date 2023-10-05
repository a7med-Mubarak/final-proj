import { createContext, useState } from "react";


export let CounterContext = createContext();

export default function CounterContextProvider(props){

    let [counter , setCounter] = useState(0);
    let [userName , setUserName] = useState("");

    function ChangeCounter()
    {
        setCounter(Math.random())
    }

    return <CounterContext.Provider value={{counter , userName , ChangeCounter}}>
        {props.children}
    </CounterContext.Provider>
}

