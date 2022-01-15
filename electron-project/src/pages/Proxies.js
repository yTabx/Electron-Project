import React, { Component } from 'react';
import './Proxies.css'


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
      
      var s = this.state.value;
      console.log(s);
      event.preventDefault();
    }
    

    render() {
      return (
        <div className = "proxies-container">
            <form onSubmit={this.handleSubmit}>
                <h1> proxies </h1>
                <textarea className = "proxy-textarea" value={this.state.value} onChange={this.handleChange} placeholder = "paste proxie list here or type them out seperated by commas or newlines"/> 

                <br/> 
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }

  }
  export default Proxies;






/*
import React from 'react';
import './proxies.css'

function handleProxyListSubmit(){
    console.log("button-clicked")
}
function handleProxyListChange(){
    console.log("button-clicked")
}
function Proxies() {
    return (
        <div className = "proxies-container">
            <h1>  upload</h1>
            
            <form onSubmit={this.handleProxyListSubmit}>
                <label>
                proxies:
                <textarea value={this.state.value} onChange={this.handleProxyListChange} />        </label>
                <input type="submit" value="Submit" />
            </form>

            <h1> proxies</h1>
            <div className = "proxy list">
                insert proxy list here
            </div>
        </div>
    );
}
export default Proxies*/