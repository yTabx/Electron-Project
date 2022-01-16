import React from "react";
import {NavLink} from './NavbarElements';
import './Navbar.css'

const Navabar = () => {
    return(
<>
        <NavLink to =  "/dashboard" activeStyle>
        <div type="button" className = "left-pannel-button">
            <div className = "icon"><i className="fas fa-columns" id = "dash-btn"></i></div>
          </div> 
        </NavLink>

        <NavLink to = "/analytics" activeStyle>
        <div type="button" className = "left-pannel-button" id = "analytics-btn">
            <div className = "icon"><i className = "fas fa-chart-line"></i></div>
          </div>
        </NavLink>

        <NavLink to = "/tasks" activeStyle>    
        <div type="button" className = "left-pannel-button" id = "tasks-btn">
            <div className = "icon"><i class="fas fa-tasks"></i></div>
          </div>
        </NavLink>

        <NavLink to ="/proxies" activeStyle> 
        <div type="button" className = "left-pannel-button" id = "proxies-btn">
            <div className = "icon"><i class="fas fa-address-card"></i></div>
          </div>
        </NavLink>

        <NavLink to = "/search" activeStyle>
        <div type="button" className = "left-pannel-button" id = "search-btn">
            <div className = "icon"><i class="fas fa-search"></i></div> 
          </div>
        </NavLink>
        </>
    );
    

};
export default Navabar;