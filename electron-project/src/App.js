import logo from './logo.svg';
import './App.css';
import './pages/Proxies.js'
import Proxies from './pages/Proxies';
import Navbar from './components/navbar/Navbar';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics'; 

import React, { useEffect } from 'react';
import {HashRouter,Route,Routes,Link,} from "react-router-dom";

import SearchTerms from './pages/SearchTerms';




function App() {
  return (
    <HashRouter>
      <div className = "App">
        <div className = "contianer">
          <div className = "left-container">
            <div className = "left-iner-container-top">
              <h1 className = "logo">
                vile
              </h1>
            </div>
            <div className = "left-iner-container-bottom">
              <Navbar />
        
            </div>
          </div>
          <div className = "right-container">
              <div className = "right-iner-container-upper">
                <h1 className = "logo">
                  titles
                </h1>

              </div>
              <div className = "right-iner-container-lower">
                <div className = "right-inner-lower-border">
                <Routes>
                  
                  <Route exact path = "/dashboard" element = {<Dashboard/>}/>
                  <Route exact path = "/analytics" element = {<Analytics/>}/>
                  <Route exact path = "/tasks" element = {<Tasks/>}/>
                  <Route exact path = "/proxies" element = {<Proxies/>}/>
                  <Route exact path = "/search" element = {<SearchTerms/>}/>    
                
                </Routes>
                <button onClick={()=>{
              
              console.log("clickesd");
             
              window.api.send('anything-asynchronous', "hey");
              console.log("clickesd after");
    
          }}>Async</button>

                </div>
              </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
