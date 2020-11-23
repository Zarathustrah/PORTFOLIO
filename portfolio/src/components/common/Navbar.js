import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
// import { mergeClasses } from '@material-ui/styles'


const useStyles = makeStyles(() =>  ({
  typographyStyles: {
    flex: 1
  }, 
  buttonStyle: {
    color: 'white'
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
        <Typography className={classes.typographyStyles}>
          <Button className={classes.buttonStyle}><strong>Daniel Price</strong></Button>
        </Typography>
        <Button className={classes.buttonStyle}>Projects</Button>
        <Button className={classes.buttonStyle}>About</Button>
        <Button className={classes.buttonStyle}>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

