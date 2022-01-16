import React, { Component } from 'react';
import './SearchTerms.css'


class SearchTerms extends React.Component {
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
      
    }
    

    render() {
      return (
        <div className = "search-container">
            <form onSubmit={this.handleSubmit}>
                <h1> search terms </h1>
                <textarea className = "search-textarea" value={this.state.value} onChange={this.handleChange} placeholder = "paste proxie list here or type them out seperated by commas or newlines"/> 

                <br/> 
                <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }

  }
  export default SearchTerms;





