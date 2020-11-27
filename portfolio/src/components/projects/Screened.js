import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Grid } from '@material-ui/core'
import { IconContext } from "react-icons"

import { 
  SiSass,
  SiReact,
  SiGithub,  
} from "react-icons/si"

import { FaExternalLinkSquareAlt } from "react-icons/fa"



const useStyles = makeStyles({
  root: {
    height: '300px',
    background: `url('/images/Screened.jpg')`,
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
    textAlign: 'center',
    '&:hover': {
      opacity: '0.9',
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

export default function Screened() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <h1>Director Dictator</h1>
        <p>Two-day group hackathon to build a movie app</p>
        <Grid 
        container
        direction='row'
        justify='center'>
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <div className={classes.icon}>
              <SiReact />
              <p>React</p>
            </div>
            <div className={classes.icon}>
              <SiSass />
              <p>Sass</p>
            </div>
          </IconContext.Provider>
        </Grid>
        <Grid 
        container
        direction='row'
        justify='center'>
        <IconContext.Provider value={{ size: '1.8rem' }}>
          <div className={classes.linkIcon}>
            <a href='https://github.com/Zarathustrah/SEI-Project-3' target='_blank' rel='noopener  noreferrer'>
            <SiGithub
            href='https://github.com/Zarathustrah/SEI-Project-3'
            target='_blank'
            />
            </a>
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
