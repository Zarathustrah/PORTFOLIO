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


const useStyles = makeStyles(theme => ({
  root: {
    height: '300px',
    background: `url('https://i.ibb.co/jDfr7SS/Screened.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  projectInfo: {
    height: '300px',
    background: '#1f26ff',
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
  },
  anchor: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#ff0127',
    },
  },
  heading: {
    marginTop: '10px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '20px',
      marginTop: '30px'
    }

  },
  subheading: {
    margin: '15px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '12px',
    }
  }

}))

export default function Screened() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.projectInfo}>
        <Typography variant='h4' className={classes.heading}>Director Dictator</Typography>
        <Typography variant='subtitle1' className={classes.subheading}>Two-day team build of a film app in React
        </Typography>
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
            <a className={classes.anchor} href='https://github.com/Zarathustrah/SEI-Project-3' target='_blank' rel='noopener  noreferrer'>
            <SiGithub />
            </a>
          </div>
          <div className={classes.linkIcon}>
            <a className={classes.anchor} href='https://directordictator.netlify.app/' target='_blank' rel='noopener  noreferrer'>
            <FaExternalLinkSquareAlt />
            </a>
          </div>
        </IconContext.Provider>
        </Grid>
      </div>
    </Box>
  )
}
