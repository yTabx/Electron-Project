import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';


/* TODO come back to this https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/ */


export const NavLink = styled(Link)`
  color: #000000;

  &.active {
    color: #999999;
  }
`;

/*

.left-iner-container-bottom {
    position: absolute;
    top: 50px;
    
    margin-right: 10px;
    width: 100%;
    height: calc(100% - 50px );
  
  
    
  }
  
  
  .left-pannel-button{
    position: relative;
  
    width: calc(100% );
    font-size: 40px;
    text-align:center;
    height: calc(100% /5);
    color: black;
  
  }
  
  .icon{
    padding-top:33%;
    vertical-align:middle;
  }
  .left-pannel-button:hover{
    
    color:#673AB7;
    font-size: 50px;
    
  }*/
    