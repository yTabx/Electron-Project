
import React from 'react';
import './proxies.css'

function saveProxyList(){
    console.log("button-clicked")
}
function Proxies() {
    return (
        <div className = "proxies-container">
            <h1>  upload</h1>
            
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder = "paste proxies here or type them seperated by commas or newlines">
           
            </textarea>
            <br/>
            <br/>
            <button onClick = "saveProxyList();" >save</button>
            <h1> proxies</h1>
            <div className = "proxy list">
                insert proxy list here
            </div>
        </div>
    );
}
export default Proxies