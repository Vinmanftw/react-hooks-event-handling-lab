// Code Keypad Component Here
import { returnStatement } from "@babel/types";
import React from "react";

function Keypad(){
    return(
        <input type="password" onChange={()=>{console.log('Entering password...')}}/>

        
    )
}

export default Keypad;