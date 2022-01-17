

import React, { Component } from 'react';
import './Proxies.css'
const ipcRenderer = window.ipcRenderer;

/*


class Proxies extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      value: this.readProxies()    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    readProxies(){
        return '';
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      console.log("hi");
      var s = this.state.value;
      console.log("from component 1");
      //ipcRenderer.send('writeToProxyFile','ping');
      event.preventDefault();
    }
    
*/
    function Proxies() {
      return (
          <div className = "Proxies">
        <div className = "proxies-container">
            <form >
                <div> proxies </div> 
                <textarea className = "proxy-textarea"  placeholder = "paste proxie list here or type them out seperated by commas or newlines"/> 

                <br/> 
                <input type="submit"  />
            </form>
        </div>
        </div>
      );
    }

  
  export default Proxies;






