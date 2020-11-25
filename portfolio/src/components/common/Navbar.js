import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core/'
import { Link as Scroll } from 'react-scroll'



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
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

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
        <Scroll to='projects' smooth={true}>
          <Button className={classes.buttonStyle}>Projects</Button>
        </Scroll>
        <Scroll to='about' smooth={true}>
          <Button className={classes.buttonStyle}>About</Button>
        </Scroll>
        <Scroll to='contact' smooth={true}>
          <Button className={classes.buttonStyle}>Contact</Button>
        </Scroll>
      </Toolbar>
      <Box id='a'>
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

