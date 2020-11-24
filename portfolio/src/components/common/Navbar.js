import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core/'
// import { mergeClasses } from '@material-ui/styles'


const useStyles = makeStyles(() =>  ({
  typography: {
    flex: 1,
  }, 
  buttonTitle: {
    color: 'white',
    fontSize: '25px'
  },
  buttonStyle: {
    color: 'white',
    fontSize: '12px'
  }
}))

export default function Navbar() {
  const classes = useStyles()

  return(
    <AppBar 
    position='static'
    style={{
      boxShadow: 'none',
      background: 'transparent',
    }}>
      <Toolbar>
        <Typography className={classes.typography}>
          <Button className={classes.buttonTitle}>Dan Price</Button>
        </Typography>
        <Button className={classes.buttonStyle}>Projects</Button>
        <Button className={classes.buttonStyle}>About</Button>
        <Button className={classes.buttonStyle}>Contact</Button>
      </Toolbar>
      <Box>
        <h3 style={{ 
        marginLeft: '35px',
        marginBottom: '20px',
        }}>
          Software Engineer
        </h3>
      </Box>
    </AppBar>
  )
}

