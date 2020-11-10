import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'


const useStyles = makeStyles(() =>  ({
  
}))

export default function Navbar() {
  return(
    <AppBar 
    position='fixed'
    style={{
      boxShadow: 'none',
    }}>
      <Toolbar>
        <Typography>
          <Button>Daniel Price</Button>
        </Typography>
        <Button>Projects</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

