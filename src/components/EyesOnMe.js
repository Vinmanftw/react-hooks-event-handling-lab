// Code EyesOnMe Component Here
import React, {useState} from "react";

let isOn;

function handleFocus(event){
    isOn=!isOn

}

function EyesOnMe(){
    return(
        <div>
            <button onFocus={()=>{console.log('Good!')}} 
                    onBlur={()=>{console.log('Hey! Eyes on me!')}}>
                Hey! Eyes on me!
            </button>
        </div>
        
    )
}
export default EyesOnMe;