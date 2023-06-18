 import {useState, userState} from 'react';
function About(){
    const [name , setName]= useState("saini");
    return(
        <div>
            <h1>About</h1>
            {/* <h1>This section is for {name}</h1>
            <button onClick={()=>setName("saini")}>Click me</button> */}
            <h>my name is {name}</h>
           <button onClick={()=>setName("master")}>hit me</button>
        </div>

    )
}
export default About;