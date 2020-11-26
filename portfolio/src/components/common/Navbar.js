import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Box, Collapse } from '@material-ui/core/'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
  },
  subtitle: {

  }
}))

export default function Navbar() {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  console.log(isMobile)
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
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={70}>
        <Box id='a' className={classes.subtitle}>
          <h3 style={{ 
          marginLeft: '35px',
          marginBottom: '20px',
          }}>
          Software Engineer
          </h3>
        </Box>
      </Collapse>
    </AppBar>
  )
}

