import React,{useContext} from 'react';
import {NameContext, LastNameContext} from "./App"

function Asaide(){

    const name = useContext(NameContext);
    const lastName = useContext(LastNameContext);

    return(
        <div>
            <h1>Aside && name : {name} {lastName}</h1>
        </div>
    )
}

export default Asaide;