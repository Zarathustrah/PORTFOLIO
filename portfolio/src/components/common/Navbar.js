import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
import { mergeClasses } from '@material-ui/styles'


const useStyles = makeStyles(() =>  ({
  typographyStyles: {
    flex: 1
  }
}))

export default function Navbar() {
  const classes = useStyles()

  return(
    <AppBar 
    position='fixed'
    style={{
      boxShadow: 'none',
      background: 'transparent',
    }}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <Button>Daniel Price</Button>
        </Typography>
        <Button>Projects</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </Toolbar>
    </AppBar>
  )
}

