import logo from './logo.svg';
import './App.css';
import './pages/Proxies.js'
import Proxies from './pages/Proxies';

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

                <Link to =  "/" activeStyle>
                <div type="button" className = "left-pannel-button">
                    <div className = "icon"><i className="fas fa-columns" id = "dash-btn"></i></div>
                  </div> 
                </Link>

                <Link to = "/analytics" activeStyle>
                <div type="button" className = "left-pannel-button" id = "analytics-btn">
                    <div className = "icon"><i className = "fas fa-chart-line"></i></div>
                  </div>
                </Link>

                <Link to = "/tasks" activeStyle>    
                <div type="button" className = "left-pannel-button" id = "tasks-btn">
                    <div className = "icon"><i class="fas fa-tasks"></i></div>
                  </div>
                </Link>

                <Link to ="/proxies" activeStyle> 
                <div type="button" className = "left-pannel-button" id = "proxies-btn">
                    <div className = "icon"><i class="fas fa-address-card"></i></div>
                  </div>
                </Link>

                <Link to = "/search" activeStyle>
                <div type="button" className = "left-pannel-button" id = "search-btn">
                    <div className = "icon"><i class="fas fa-search"></i></div> 
                  </div>
                </Link>
        
            </div>
          </div>
          <div className = "right-container">
              <div className = "right-iner-container-upper">
                <h1 className = "logo">
                  title
                </h1>

              </div>
              <div className = "right-iner-container-lower">
                <Routes>
                  
                  <Route exact path = "/proxies" element = {<Proxies/>}/>
                  <Route exact path = "/search" element = {<SearchTerms/>}/>
                  
                
                </Routes>
              </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
