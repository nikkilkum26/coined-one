import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './header.css'

const Header = () => {
    return (
        <div>
            <AppBar position="static" id="header" style={{opacity:'0.7'}}>
                <Toolbar>
                 <AccountCircleIcon style={{color:'black'}}/>
                <div id="name">
                  Adtiya prasad</div>
  
                  <Button variant="outlined" color="primary" style={{left:'90vh',color:"blue"}}>
                        Add Device
                    </Button>
         
                </Toolbar>
              
            </AppBar>
        </div>
    )
}

export default Header
