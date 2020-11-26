import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import { IconContext } from "react-icons"


import { 
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGithub,  
} from "react-icons/si"

import { FaExternalLinkSquareAlt } from "react-icons/fa"



const useStyles = makeStyles({
  root: {
    height: '300px',
    background: `url('/images/Frogger.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    '&:hover': {
      opacity: '0.9'
    },
    transition: '0.4s'
  },
  icon: {
    fontSize: '8px',
    textAlign: 'center',
    margin: '20px'
  },
  linkIcon: {
    fontSize: '8px',
    textAlign: 'center',
    margin: '15px',
    color: 'white',
    '&:hover': {
      color: '#ff0127',
    },
  }

})

export default function Frogger() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <h1>Frogger</h1>
        <p>One-week solo build of a classic game in vanilla JS</p>
        <Grid 
        container
        direction='row'
        justify='center'>
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div className={classes.icon}>
              <SiCss3 />
              <p>Css</p>
            </div>
            <div className={classes.icon}>
              <SiJavascript />
              <p>JavaScript</p>
            </div>
            <div className={classes.icon}>
              <SiHtml5 />
              <p>HTML</p>
            </div>
          </IconContext.Provider>
        </Grid>
        <Grid 
        container
        direction='row'
        justify='center'>
        <IconContext.Provider value={{ size: '1.8rem' }}>
          <div className={classes.linkIcon}>
            <SiGithub 
            href='https://github.com/Zarathustrah/SEI-Project-3'
            target='_blank'
            />
          </div>
          <div className={classes.linkIcon}>
            <FaExternalLinkSquareAlt />
          </div>
        </IconContext.Provider>
        </Grid>
      </div>
    </Box>
  )
}
